from api import models
from django.db.models import Q
from rest_framework import viewsets
from api import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

class BrandViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = models.Brand.objects.all()
    serializer_class = serializers.BrandSerializer

    def get_queryset(self):
        brand = self.request.query_params.get('brand')
        if brand:
            queryset = models.Brand.objects.filter(name = brand)
        else:
            queryset = models.Brand.objects.filter(pk=0)
        return queryset

class TokenViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = models.Token.objects.filter(pk=0)
    serializer_class = serializers.TokenSerializer

    def get_queryset(self):
        brand = self.request.query_params.get('brand')
        email = self.request.query_params.get('email')
        if brand and email:
            queryset = models.Token.objects.filter(Q(name = brand) & Q(oxhackuser__email = email))
        else:
            queryset = models.Token.objects.filter(pk=0)
        return queryset

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = models.OxHackUser.objects.all()
    serializer_class = serializers.UserSerializer

@api_view(['GET'])
def brand(request):
    brand = request.query_params.get('brand')
    queryset = models.Brand.objects.get(name = brand)
    return Response(queryset.contractAddress, status=status.HTTP_200_OK)

@api_view(['GET'])
def earnableTokens(request):
    brand = request.query_params.get('brand')
    email = request.query_params.get('email')
    queryset = models.Token.objects.filter(Q(brand__name = brand) & Q(oxhackuser__email = email)).values('tokenId')
    return Response(queryset, status=status.HTTP_200_OK)

@api_view(['GET'])
def getMetaData(request, brand, tokenid):
    queryset = models.MetaData.objects.get(Q(token__brand__name = brand) & Q(token__tokenId = tokenid))
    return Response(queryset.json, status=status.HTTP_200_OK)

@api_view(['POST'])
def claimToken(request):
    user = models.OxHackUser.objects.get(Q(email=request.data['email']))
    token = models.Token.objects.get(Q(brand__contractAddress= request.data['contractAddress']) & Q(tokenId=request.data['tokenId']))
    user.tokens.remove(token)
    user.claimedTokens.add(token)
    user.save()
    return Response(status=status.HTTP_200_OK)

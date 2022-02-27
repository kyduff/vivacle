from api import models
from rest_framework import serializers

class BrandSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Brand
        fields = ['contractAddress']

class TokenSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Token
        fields = ['tokenId']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.OxHackUser
        fields = ['email', 'address', 'tokens']

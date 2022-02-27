from django.urls import include, path
from rest_framework import routers
from api import views
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
# router.register(r'brands', views.BrandViewSet)
# router.register(r'token', views.TokenViewSet)
# router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('brand/', views.brand),
    path('tokens/', views.earnableTokens),
    path('metadata/<brand>/<tokenid>/', views.getMetaData),
    path('claim-token/', views.claimToken),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

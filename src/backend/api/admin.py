from django.contrib import admin
from api import models

# Register your models here.

admin.site.register(models.OxHackUser)
admin.site.register(models.Brand)
admin.site.register(models.Token)
admin.site.register(models.MetaData)
admin.site.site_url = "/"

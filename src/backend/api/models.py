from django.db import models

# Create your models here.

class Brand(models.Model):
    name = models.CharField(max_length=100)
    contractAddress = models.CharField(max_length=65, default="")

    def __str__(self):
        return self.name

class Token(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    tokenId = models.CharField(max_length=65)

    def __str__(self):
        return str(self.brand.contractAddress) + "_" + str(self.tokenId)

class OxHackUser(models.Model):
    email = models.EmailField(unique=True)
    address = models.CharField(max_length=65)
    tokens = models.ManyToManyField(Token, blank=True)
    claimedTokens = models.ManyToManyField(Token, related_name="claimedTokens", blank=True)

    def __str__(self):
        return self.email

class MetaData(models.Model):
    token = models.ForeignKey(Token, on_delete=models.CASCADE)
    json = models.JSONField()

    def __str__(self):
        return str(self.token)

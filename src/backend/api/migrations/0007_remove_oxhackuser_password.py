# Generated by Django 4.0 on 2022-02-27 05:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_oxhackuser_claimedtokens_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='oxhackuser',
            name='password',
        ),
    ]
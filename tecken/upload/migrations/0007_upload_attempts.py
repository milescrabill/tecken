# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-01 17:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('upload', '0006_auto_20170728_2004'),
    ]

    operations = [
        migrations.AddField(
            model_name='upload',
            name='attempts',
            field=models.IntegerField(default=0),
        ),
    ]

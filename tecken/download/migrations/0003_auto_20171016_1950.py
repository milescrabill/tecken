# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-16 19:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('download', '0002_microsoftdownload'),
    ]

    operations = [
        migrations.AlterField(
            model_name='microsoftdownload',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, db_index=True),
        ),
    ]

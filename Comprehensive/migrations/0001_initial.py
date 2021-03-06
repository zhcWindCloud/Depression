# Generated by Django 2.2 on 2021-04-07 19:53

import django.utils.timezone
from django.db import migrations, models

import Comm.storage


class Migration(migrations.Migration):
    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(height_field='image_height', storage=Comm.storage.ImageStorage(),
                                            upload_to='upload/WebImg/%Y%m%d', verbose_name='图片',
                                            width_field='image_width')),
                ('create_operator',
                 models.CharField(blank=True, editable=False, max_length=256, null=True, verbose_name='创建者')),
                ('update_operator',
                 models.CharField(blank=True, editable=False, max_length=256, null=True, verbose_name='修改者')),
                ('create_time',
                 models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('image_height', models.PositiveIntegerField(blank=True, editable=False, null=True)),
                ('image_width', models.PositiveIntegerField(blank=True, editable=False, null=True)),
            ],
            options={
                'verbose_name': '图片',
                'verbose_name_plural': '轮播图管理',
            },
        ),
        migrations.CreateModel(
            name='NavManager',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('NavName', models.CharField(db_index=True, max_length=128, unique=True, verbose_name='菜单名')),
                ('slug', models.CharField(editable=False, max_length=500, verbose_name='路径')),
                ('create_operator',
                 models.CharField(blank=True, editable=False, max_length=256, null=True, verbose_name='创建者')),
                ('update_operator',
                 models.CharField(blank=True, editable=False, max_length=256, null=True, verbose_name='修改者')),
                ('create_time',
                 models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
            ],
            options={
                'verbose_name': '菜单',
                'verbose_name_plural': '菜单管理',
            },
        ),
        migrations.CreateModel(
            name='Visitor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('OutIP', models.CharField(blank=True, max_length=100, null=True, verbose_name='IP地址')),
                ('InnerIP', models.CharField(blank=True, max_length=250, null=True, verbose_name='私网IP地址')),
                ('country', models.CharField(blank=True, max_length=250, null=True, verbose_name='地理地址')),
                ('operators', models.CharField(blank=True, max_length=250, null=True, verbose_name='运营商')),
                ('hostname', models.CharField(blank=True, max_length=250, null=True, verbose_name='访问设备')),
                ('MacAdress', models.CharField(blank=True, max_length=250, null=True, verbose_name='MAC地址')),
                ('Viewtime', models.DateTimeField(auto_now=True, verbose_name='最近访问时间')),
            ],
            options={
                'verbose_name': 'IP地址',
                'verbose_name_plural': '访问记录',
            },
        ),
        migrations.CreateModel(
            name='WebsiteManager',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
    ]

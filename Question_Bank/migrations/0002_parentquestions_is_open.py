# Generated by Django 2.2 on 2021-05-10 09:10

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('Question_Bank', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='parentquestions',
            name='is_Open',
            field=models.BooleanField(default=False, null=True, verbose_name='是否启用标准分（中国常模）'),
        ),
    ]

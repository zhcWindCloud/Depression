# Generated by Django 2.2 on 2021-05-10 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Article', '0003_auto_20210507_0019'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='reading',
            field=models.PositiveIntegerField(blank=True, default=648, editable=False, null=True, verbose_name='阅读次数'),
        ),
    ]
from django.contrib.auth.models import AbstractUser, User
from django.db import models
# Create your models here.
from django.utils import timezone

from Comm.storage import ImageStorage


class NewUser(User):
    Phone = models.CharField(max_length=11, verbose_name='手机号码', blank=True, null=True)
    gender = models.CharField(verbose_name='性别', max_length=60, blank=True, null=True)
    grade = models.CharField(verbose_name='年级', max_length=60, blank=True, null=True)
    HeadImg = models.ImageField(verbose_name='头像', upload_to="upload/HeadImg/%Y%m%d", height_field="image_height",
                                width_field="image_width", storage=ImageStorage(), blank=True, null=True)
    create_time = models.DateTimeField(verbose_name='注册时间', default=timezone.now, editable=False)
    image_height = models.PositiveIntegerField(null=True, blank=True, editable=False, default="325")
    image_width = models.PositiveIntegerField(null=True, blank=True, editable=False, default="520")

    class Meta:
        verbose_name = '用户信息'
        verbose_name_plural = '信息管理'

    def save(self, *args, **kargs):
        self.image_height = 325
        self.image_width = 520
        super(NewUser, self).save(*args, **kargs)

    def __str__(self):
        return self.username

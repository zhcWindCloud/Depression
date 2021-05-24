from django.contrib.auth.models import AbstractUser
from django.db import models
# Create your models here.
from django.urls import reverse
from django.utils import timezone

from Comm.FormatUtils import FormatPinyin

from Comm.storage import ImageStorage


class NavManager(models.Model):
    """一级菜单"""
    NavName = models.CharField(max_length=128, verbose_name='菜单名', unique=True, db_index=True)
    slug = models.CharField(max_length=500, editable=False, verbose_name='路径')
    create_operator = models.CharField(max_length=256, verbose_name='创建者', null=True, blank=True, editable=False)
    update_operator = models.CharField(max_length=256, verbose_name='修改者', null=True, blank=True, editable=False)
    create_time = models.DateTimeField(verbose_name='创建时间', default=timezone.now, editable=False)
    update_time = models.DateTimeField(verbose_name='更新时间', auto_now=True, editable=False)

    class Meta:
        verbose_name = '菜单'
        verbose_name_plural = '菜单管理'

    def save(self, *args, **kargs):
        self.slug = "/" + FormatPinyin(self.NavName)
        super(NavManager, self).save(*args, **kargs)

    def get_absolute_url(self):
        return reverse("NavManager:NavName", args=[self.slug])

    def __str__(self):
        return self.NavName


#
# class SecodeManager(models.Model):
#     """二级菜单"""
#     FirstMeun = models.ForeignKey(NavManager, verbose_name='问卷表类型', on_delete=models.SET_NULL, null=True,
#                                   related_name="SecodeOrm")
#     NavName = models.CharField(max_length=128, verbose_name='二级菜单', unique=True, db_index=True)
#     slug = models.CharField(max_length=500, editable=False, verbose_name='路径')
#     create_operator = models.CharField(max_length=256, verbose_name='创建者', null=True, blank=True, editable=False)
#     update_operator = models.CharField(max_length=256, verbose_name='修改者', null=True, blank=True, editable=False)
#     create_time = models.DateTimeField(verbose_name='创建时间', default=timezone.now, editable=False)
#     update_time = models.DateTimeField(verbose_name='更新时间', auto_now=True, editable=False)
#
#     class Meta:
#         verbose_name = '二级菜单'
#         verbose_name_plural = '二级菜单管理'
#
#     def save(self, *args, **kargs):
#         self.slug = FormatString(self.NavName)
#         super(NavManager, self).save(*args, **kargs)
#
#     def get_absolute_url(self):
#         return reverse("NavManager:NavName", args=[self.FirstMeun.NavName, self.slug])
#
#     def __str__(self):
#         return self.NavName

#
# class ImgDict(models.Model):
#     """图片分类"""
#     Imgtitle = models.CharField(max_length=60, verbose_name="图片类型", unique=True, db_index=True)
#     create_operator = models.CharField(max_length=256, verbose_name='创建者', null=True, blank=True, editable=False)
#     update_operator = models.CharField(max_length=256, verbose_name='修改者', null=True, blank=True, editable=False)
#     create_time = models.DateTimeField(verbose_name='创建时间', default=timezone.now, editable=False)
#     update_time = models.DateTimeField(verbose_name='更新时间', auto_now=True, editable=False)
#
#     class Meta:
#         verbose_name = '图片分类'
#         verbose_name_plural = '图片分类'
#
#     def __str__(self):
#         return self.Imgtitle


class Image(models.Model):
    image = models.ImageField(verbose_name='图片', upload_to="upload/WebImg/SlideImg/%Y%m%d", height_field="image_height",
                              width_field="image_width", storage=ImageStorage())
    create_operator = models.CharField(max_length=256, verbose_name='创建者', null=True, blank=True, editable=False)
    update_operator = models.CharField(max_length=256, verbose_name='修改者', null=True, blank=True, editable=False)
    create_time = models.DateTimeField(verbose_name='创建时间', default=timezone.now, editable=False)
    update_time = models.DateTimeField(verbose_name='更新时间', auto_now=True, editable=False)
    image_height = models.PositiveIntegerField(null=True, blank=True, editable=False)
    image_width = models.PositiveIntegerField(null=True, blank=True, editable=False)

    class Meta:
        verbose_name = '图片'
        verbose_name_plural = '轮播图管理'

    def save(self, *args, **kargs):
        self.image_height = 354
        self.image_width = 1050
        super(Image, self).save(*args, **kargs)

    # 判断自身的img字段是否为空，不为空则返回self.img.url。
    @property
    def img_url(self):
        if self.image and hasattr(self.image, 'url'):
            return self.image.path

    def __str__(self):
        return self.image.path


class Visitor(models.Model):
    OutIP = models.CharField(verbose_name='来访IP', max_length=100, blank=True, null=True)  # ip地址
    InnerIP = models.CharField(verbose_name='私网IP地址', max_length=250, blank=True, null=True)
    country = models.CharField(verbose_name='地理地址', max_length=250, blank=True, null=True)
    operators = models.CharField(verbose_name='运营商', max_length=250, blank=True, null=True)
    hostname = models.CharField(verbose_name='访问设备', max_length=250, blank=True, null=True)
    MacAdress = models.CharField(verbose_name='操作系统', max_length=250, blank=True, null=True)
    Viewtime = models.DateTimeField(verbose_name='最近访问时间', auto_now=True, editable=False)

    class Meta:
        verbose_name = 'IP地址'
        verbose_name_plural = '访问记录'

    # def save(self, *args, **kargs):
    #     self.InnerIP = GetInnerIP().get("IP", None)
    #
    #     super(Visitor, self).save(*args, **kargs)

    #
    # def ViewCouter(self):
    #     return Visitor.objects.count()

    def __str__(self):
        return self.OutIP


#
class WebsiteManager(models.Model):
    pass
# class ImgManage(models.Model):
#     """图片管理"""
#     title = models.ForeignKey(ImgDict, on_delete=models.CASCADE, verbose_name='图片类型',unique=True, db_index=True, related_name="imgManage")
#     create_operator = models.CharField(max_length=256, verbose_name='创建者', null=True, blank=True, editable=False)
#     update_operator = models.CharField(max_length=256, verbose_name='修改者', null=True, blank=True, editable=False)
#     create_time = models.DateTimeField(verbose_name='创建时间', default=timezone.now, editable=False)
#     update_time = models.DateTimeField(verbose_name='更新时间', auto_now=True, editable=False)
#
#     class Meta:
#         verbose_name = '图片类型'
#         verbose_name_plural = '图片管理'
#
#     def __str__(self):
#         return self.title.Imgtitle

import random

import markdown
from django.db import models
# from django.template.defaultfilters import slugify
from django.urls import reverse
from django.utils import timezone
from mdeditor.fields import MDTextField
from slugify import slugify

# Create your models here.
from Comm.storage import ImageStorage
from Comprehensive.models import NavManager


# from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(max_length=128, verbose_name='分类名', unique=True, db_index=True)
    create_operator = models.CharField(max_length=256, verbose_name='创建者', null=True, blank=True, editable=False)
    update_operator = models.CharField(max_length=256, verbose_name='修改者', null=True, blank=True, editable=False)
    create_time = models.DateTimeField(verbose_name='创建时间', default=timezone.now, editable=False)
    update_time = models.DateTimeField(verbose_name='更新时间', auto_now=True, editable=False)

    class Meta:
        verbose_name = '分类'
        verbose_name_plural = '分类管理'

    def __str__(self):
        return self.name


class Article(models.Model):
    title = models.CharField(max_length=128, verbose_name='标题', unique=True, db_index=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=False, null=True, verbose_name='分类',
                                 db_index=True)
    NavMeun = models.ForeignKey(NavManager, on_delete=models.SET_NULL, blank=False, null=True, verbose_name='所属菜单', )
    image = models.ImageField(verbose_name='图片', upload_to="upload/WebImg/Article/%Y%m%d", storage=ImageStorage())
    content_raw = MDTextField(verbose_name='原始内容')
    content_render = models.TextField(verbose_name='呈现内容', null=True, blank=True)
    author = models.CharField(verbose_name="作者", max_length=30, null=True, blank=True)
    slug = models.SlugField(max_length=500, editable=False, verbose_name='Url')
    reading = models.PositiveIntegerField(verbose_name='阅读次数', editable=False, blank=True, null=True,
                                          default=random.randint(1, 999))
    create_operator = models.CharField(max_length=256, verbose_name='创建者', null=True, blank=True, editable=False)
    update_operator = models.CharField(max_length=256, verbose_name='修改者', null=True, blank=True, editable=False)
    create_time = models.DateTimeField(verbose_name='创建时间', default=timezone.now, editable=False)
    update_time = models.DateTimeField(verbose_name='更新时间', auto_now=True, editable=False)

    class Meta:
        ordering = ("-create_time", "-update_time",)
        index_together = (('id', 'slug'),)
        verbose_name = '文章'
        verbose_name_plural = '文章管理'

    def __str__(self):
        return self.title

    def save(self, *args, **kargs):
        # 将Markdown格式 转为html，页面上显示
        self.content_render = markdown.markdown(self.content_raw, extensions=[
            'markdown.extensions.extra',
            'markdown.extensions.codehilite',
            'markdown.extensions.toc',
        ])
        self.slug = slugify(self.title)
        super(Article, self).save(*args, **kargs)

        # 控制显示长度，必须在adminx的list_display变量中改为函数名

    def short_detail(self):
        if len(str(self.content_raw)) > 30:
            return '{}...'.format(str(self.content_raw)[0:10])
        return str(self.content_raw)

    short_detail.allow_tags = True
    short_detail.short_description = '内容'

    def get_absolute_url(self):
        return reverse("Article:article_detail", args=[self.NavMeun.slug, self.id, self.slug])

    def get_url_path(self):
        return reverse("Article:article_content", args=[self.NavMeun.slug, self.id, self.slug])

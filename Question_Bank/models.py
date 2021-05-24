import django.utils.timezone as timezone
import markdown
from django.core.exceptions import ValidationError
from django.db import models
from slugify import slugify

from Comm.IPUtils import GetInnerIP, GetMac, GetOutIP
from Comprehensive.models import NavManager


# Create your models here.


class ParentQuestions(models.Model):
    themeTitle = models.CharField(max_length=250, verbose_name='问卷表', unique=True, null=True, )
    NavMeun = models.ForeignKey(NavManager, on_delete=models.SET_NULL, blank=False, null=True, verbose_name='所属菜单', )
    is_Open = models.BooleanField(verbose_name="是否启用标准分（中国常模）",default=False, blank=False, null=True)
    content = models.TextField(verbose_name='测试表描述内容', null=True, blank=True)
    content_render = models.TextField(verbose_name='呈现内容', null=True, blank=True, editable=False)
    themeTitle_show = models.TextField(verbose_name='问卷小建议', null=True, blank=True)
    create_operator = models.CharField(max_length=256, verbose_name='创建者', null=True, blank=True, editable=False)
    update_operator = models.CharField(max_length=256, verbose_name='修改者', null=True, blank=True, editable=False)
    create_time = models.DateTimeField(verbose_name='创建时间', default=timezone.now, editable=False)
    update_time = models.DateTimeField(verbose_name='更新时间', auto_now=True, editable=False)
    slug = models.SlugField(max_length=500, editable=False, verbose_name='Url')

    class Meta:
        # db_table = 'Django_Questions'
        verbose_name = "类型"
        verbose_name_plural = "试题分类"
        ordering = ['create_time', 'update_time']  # 表示按'create_time'字段进行降序排列

    def save(self, *args, **kargs):
        self.slug = slugify(self.themeTitle)
        # 将Markdown格式 转为html，页面上显示
        self.content_render = markdown.markdown(self.content, extensions=[
            'markdown.extensions.extra',
            'markdown.extensions.codehilite',
            'markdown.extensions.toc',
        ])
        super(ParentQuestions, self).save(*args, **kargs)

    # 控制显示长度，必须在adminx的list_display变量中改为函数名
    def short_detail(self):
        if len(str(self.content)) > 30:
            return '{}...'.format(str(self.content)[0:10])
        return str(self.content)

    short_detail.allow_tags = True
    short_detail.short_description = '测试表描述内容'

    def __str__(self):
        return self.themeTitle


class QuestionPaper(models.Model):
    Subject = models.ForeignKey(ParentQuestions, verbose_name='问卷表类型', on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=30, verbose_name='试题属性')
    create_operator = models.CharField(max_length=256, verbose_name='创建者', null=True, blank=True, editable=False)
    update_operator = models.CharField(max_length=256, verbose_name='修改者', null=True, blank=True, editable=False)
    create_time = models.DateTimeField(verbose_name='创建时间', default=timezone.now, editable=False)
    update_time = models.DateTimeField(verbose_name='更新时间', auto_now=True, editable=False)
    slug = models.SlugField(max_length=500, editable=False, verbose_name='Url')

    class Meta:
        # db_table = 'Django_Questions'
        verbose_name = "试题"
        verbose_name_plural = "试题管理"
        ordering = ['create_time', 'update_time', 'title']  # 表示按'create_time'字段进行降序排列

    def save(self, *args, **kargs):
        self.slug = slugify(self.Subject.themeTitle)
        super(QuestionPaper, self).save(*args, **kargs)

    # def get_absolute_url(self):
    #     return reverse('title-detail-view', args=(self.Subject,))

    def __str__(self):
        return self.title


class AnswerPaper(models.Model):
    questions = models.ForeignKey(QuestionPaper, verbose_name='试题', on_delete=models.SET_NULL, null=True, )
    answer = models.CharField(max_length=255, verbose_name='答案')
    answer_score = models.PositiveIntegerField(verbose_name='分数', help_text='大于零的整数')
    create_operator = models.CharField(max_length=256, verbose_name='创建者', null=True, blank=True, editable=False)
    update_operator = models.CharField(max_length=256, verbose_name='修改者', null=True, blank=True, editable=False)
    create_time = models.DateTimeField(verbose_name='创建时间', default=timezone.now, editable=False)
    update_time = models.DateTimeField(verbose_name='更新时间', auto_now=True, editable=False)
    slug = models.SlugField(max_length=500, editable=False, verbose_name='Url')

    class Meta:
        verbose_name = "答案"
        verbose_name_plural = "答案信息"
        ordering = ['questions', 'create_time', 'update_time', 'answer_score']  # 表示按'create_time'字段进行降序排列

    def save(self, *args, **kargs):
        self.slug = slugify(self.questions.Subject.themeTitle)
        super(AnswerPaper, self).save(*args, **kargs)

    def __str__(self):
        return self.answer


class ScorePaper(models.Model):
    Subject = models.ForeignKey(ParentQuestions, verbose_name='问卷表', on_delete=models.SET_NULL, null=True, )
    min_score = models.PositiveIntegerField(verbose_name='最小分值', help_text='大于零的整数')
    max_score = models.PositiveIntegerField(verbose_name='最大分值', help_text='大于零的整数且大于最小分值')
    grade = models.CharField(max_length=250, verbose_name='评分等级')
    create_operator = models.CharField(max_length=256, verbose_name='创建者', null=True, blank=True, editable=False)
    update_operator = models.CharField(max_length=256, verbose_name='修改者', null=True, blank=True, editable=False)
    create_time = models.DateTimeField(verbose_name='创建时间', default=timezone.now, editable=False)
    update_time = models.DateTimeField(verbose_name='更新时间', auto_now=True, editable=False)
    slug = models.SlugField(max_length=500, editable=False, verbose_name='Url')

    class Meta:
        verbose_name = '参考评分等级'
        verbose_name_plural = '等级详情'

    def save(self, *args, **kargs):
        self.slug = slugify(self.Subject.themeTitle)
        super(ScorePaper, self).save(*args, **kargs)

    def clean(self):
        if self.max_score < self.min_score:
            raise ValidationError("最小值不能超过最大值")

    def __str__(self):
        return self.grade


class TestPaper(models.Model):
    themeTitle = models.CharField(max_length=250, verbose_name='问卷表')
    answer_score = models.CharField(max_length=10, verbose_name='分数')
    Sex = models.CharField(max_length=25, verbose_name='性别', blank=True, null=True)
    Respondents = models.CharField(max_length=250, verbose_name='测试者', blank=True, null=True)
    create_time = models.DateTimeField(verbose_name='测试时间', default=timezone.now, editable=False)
    Timing = models.CharField(max_length=250, verbose_name='测试时长(单位：秒)', editable=False, blank=True, null=True)
    slug = models.SlugField(max_length=500, editable=False, verbose_name='Url')
    OutIP = models.CharField(verbose_name='IP地址', max_length=100, blank=True, null=True)

    class Meta:
        verbose_name = "测试卷"
        verbose_name_plural = "答卷统计"
        ordering = ['create_time', 'themeTitle']

    def save(self, *args, **kargs):
        self.slug = slugify(self.themeTitle)
        super(TestPaper, self).save(*args, **kargs)

    def __str__(self):
        return self.themeTitle

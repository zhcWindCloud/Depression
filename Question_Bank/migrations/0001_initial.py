# Generated by Django 2.2 on 2021-04-07 19:53

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ('Comprehensive', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ParentQuestions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('themeTitle', models.CharField(max_length=250, null=True, unique=True, verbose_name='问卷表')),
                ('content', models.TextField(blank=True, null=True, verbose_name='测试表描述内容')),
                ('content_render', models.TextField(blank=True, editable=False, null=True, verbose_name='呈现内容')),
                ('themeTitle_show', models.TextField(blank=True, null=True, verbose_name='问卷小建议')),
                ('create_operator',
                 models.CharField(blank=True, editable=False, max_length=256, null=True, verbose_name='创建者')),
                ('update_operator',
                 models.CharField(blank=True, editable=False, max_length=256, null=True, verbose_name='修改者')),
                ('create_time',
                 models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('slug', models.SlugField(editable=False, max_length=500, verbose_name='Url')),
                ('NavMeun', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL,
                                              to='Comprehensive.NavManager', verbose_name='所属菜单')),
            ],
            options={
                'verbose_name': '类型',
                'verbose_name_plural': '试题分类',
                'ordering': ['create_time', 'update_time'],
            },
        ),
        migrations.CreateModel(
            name='TestPaper',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('themeTitle', models.CharField(max_length=250, verbose_name='问卷表')),
                ('answer_score', models.CharField(max_length=10, verbose_name='分数')),
                ('Sex', models.CharField(blank=True, max_length=25, null=True, verbose_name='性别')),
                ('Respondents', models.CharField(blank=True, max_length=250, null=True, verbose_name='测试者')),
                ('create_time',
                 models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='测试时间')),
                ('Timing',
                 models.CharField(blank=True, editable=False, max_length=250, null=True, verbose_name='测试时长(单位：秒)')),
                ('slug', models.SlugField(editable=False, max_length=500, verbose_name='Url')),
                ('OutIP', models.CharField(blank=True, max_length=100, null=True, verbose_name='IP地址')),
            ],
            options={
                'verbose_name': '测试卷',
                'verbose_name_plural': '答卷统计',
                'ordering': ['create_time', 'themeTitle'],
            },
        ),
        migrations.CreateModel(
            name='ScorePaper',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('min_score', models.PositiveIntegerField(help_text='大于零的整数', verbose_name='最小分值')),
                ('max_score', models.PositiveIntegerField(help_text='大于零的整数且大于最小分值', verbose_name='最大分值')),
                ('grade', models.CharField(max_length=250, verbose_name='评分等级')),
                ('create_operator',
                 models.CharField(blank=True, editable=False, max_length=256, null=True, verbose_name='创建者')),
                ('update_operator',
                 models.CharField(blank=True, editable=False, max_length=256, null=True, verbose_name='修改者')),
                ('create_time',
                 models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('slug', models.SlugField(editable=False, max_length=500, verbose_name='Url')),
                ('Subject', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL,
                                              to='Question_Bank.ParentQuestions', verbose_name='问卷表')),
            ],
            options={
                'verbose_name': '参考评分等级',
                'verbose_name_plural': '等级详情',
            },
        ),
        migrations.CreateModel(
            name='QuestionPaper',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30, verbose_name='试题属性')),
                ('create_operator',
                 models.CharField(blank=True, editable=False, max_length=256, null=True, verbose_name='创建者')),
                ('update_operator',
                 models.CharField(blank=True, editable=False, max_length=256, null=True, verbose_name='修改者')),
                ('create_time',
                 models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('slug', models.SlugField(editable=False, max_length=500, verbose_name='Url')),
                ('Subject', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL,
                                              to='Question_Bank.ParentQuestions', verbose_name='问卷表类型')),
            ],
            options={
                'verbose_name': '试题',
                'verbose_name_plural': '试题管理',
                'ordering': ['create_time', 'update_time', 'title'],
            },
        ),
        migrations.CreateModel(
            name='AnswerPaper',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer', models.CharField(max_length=255, verbose_name='答案')),
                ('answer_score', models.PositiveIntegerField(help_text='大于零的整数', verbose_name='分数')),
                ('create_operator',
                 models.CharField(blank=True, editable=False, max_length=256, null=True, verbose_name='创建者')),
                ('update_operator',
                 models.CharField(blank=True, editable=False, max_length=256, null=True, verbose_name='修改者')),
                ('create_time',
                 models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('slug', models.SlugField(editable=False, max_length=500, verbose_name='Url')),
                ('questions', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL,
                                                to='Question_Bank.QuestionPaper', verbose_name='试题')),
            ],
            options={
                'verbose_name': '答案',
                'verbose_name_plural': '答案信息',
                'ordering': ['questions', 'create_time', 'update_time', 'answer_score'],
            },
        ),
    ]

from django.contrib import admin

from Comm.Comm_Admin_Utils import ListFilter
from .forms import *


# Register your models here.


@admin.register(ParentQuestions)
class QuestionTitleAdmin(admin.ModelAdmin):
    list_display = ('themeTitle', 'short_detail', 'show_detail',"is_Open", 'create_operator', 'update_operator',
                    'create_time',
                    'update_time')
    list_display_links = ['themeTitle', 'short_detail']

    # 分页显示，一页的数量
    list_per_page = 10

    # 需要搜索的字段
    search_fields = ('themeTitle', 'create_operator', 'update_operator')

    # 过滤器
    list_filter = (ListFilter, 'update_time')

    # 控制显示长度，必须在adminx的list_display变量中改为函数名
    def show_detail(self, obj):
        if len(str(obj.themeTitle_show)) > 30:
            return '{}...'.format(str(obj.themeTitle_show)[0:10])
        return str(obj.themeTitle_show)

    show_detail.allow_tags = True
    show_detail.short_description = '类型说明'

    # 其中obj是修改后的对象，form是返回的表单（修改后的），
    # 当新建一个对象时 change = False, 当修改一个对象时 change = True

    def save_model(self, request, obj, form, change):
        if change:
            """修改记录时，添加修改者"""
            setattr(obj, 'update_operator', request.user.username)
        else:
            """添加数据时，添加创建者"""
            setattr(obj, 'create_operator', request.user.username)
        super(QuestionTitleAdmin, self).save_model(request, obj, form, change)


class QuestionLine(admin.TabularInline):
    model = AnswerPaper
    extra = 0


@admin.register(QuestionPaper)
class QuestionPaperAdmin(admin.ModelAdmin):
    list_display = ('Subject', 'title', 'create_operator', 'update_operator', 'create_time',
                    'update_time')

    # 分页显示，一页的数量
    list_per_page = 10

    # 需要搜索的字段
    search_fields = ('create_operator', 'update_operator')

    # 过滤器
    list_filter = (ListFilter, 'update_time')

    inlines = [QuestionLine, ]

    def save_model(self, request, obj, form, change):
        if change:
            """修改记录时，添加修改者"""
            setattr(obj, 'update_operator', request.user.username)
        else:
            """添加数据时，添加创建者"""
            setattr(obj, 'create_operator', request.user.username)
        super(QuestionPaperAdmin, self).save_model(request, obj, form, change)


@admin.register(ScorePaper)
class ScorePaperAdmin(admin.ModelAdmin):
    fields = ('Subject', ('min_score', 'max_score'), 'grade')

    list_display = ['Subject', 'min_score', 'max_score', 'grade', 'create_operator', 'update_operator', 'create_time',
                    'update_time']
    # 分页显示，一页的数量
    list_per_page = 10

    list_editable = ('min_score', 'max_score')

    # 需要搜索的字段
    search_fields = ('create_operator', 'update_operator')

    # 过滤器
    list_filter = (ListFilter, 'update_time')

    def save_model(self, request, obj, form, change):
        if change:
            """修改记录时，添加修改者"""
            setattr(obj, 'update_operator', request.user.username)
        else:
            """添加数据时，添加创建者"""
            setattr(obj, 'create_operator', request.user.username)

        super(ScorePaperAdmin, self).save_model(request, obj, form, change)

#
# @admin.register(TestPaper)
# class TestPaperAdmin(admin.ModelAdmin):
#     list_display = ['themeTitle', 'answer_score', 'Sex',
#                     'Respondents', 'OutIP', 'Timing', 'create_time']
#
#     # 分页显示，一页的数量
#     list_per_page = 10
#
#     # # 需要搜索的字段
#     # search_fields = ('themeTitle',)
#     #
#     # # 过滤器
#     # list_filter = (ListFilter, 'create_time')
#     list_display_links = None

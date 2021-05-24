from django.contrib import admin
from django.utils.html import format_html

from Comm.Comm_Admin_Utils import ListFilter
from .forms import ArticleAdminForm
from .models import *


# Register your models here.


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    form = ArticleAdminForm  # 指定了表单，就不要再用 formfield_overrides 了
    list_display = ["headImg", "title", "category", "short_detail", "author", 'create_operator',
                    'update_operator', 'create_time',
                    'update_time']
    # 分页显示，一页的数量
    list_per_page = 10
    list_display_links = ("title", "headImg",)

    list_editable = ("category",)

    # 需要搜索的字段
    search_fields = ('title', 'create_operator', 'update_operator')

    # 过滤器
    list_filter = (ListFilter, 'update_time')

    def headImg(self, obj):  # imageField显示方法设置,图片路径设为显示图片
        if obj.image == "":
            return None
        return format_html('<img src="%s" height="40px" width="40px" />' % obj.image.url)

    headImg.allow_tags = True
    headImg.short_description = '图片'

    def save_model(self, request, obj, form, change):
        if change:
            """修改记录时，添加修改者"""
            setattr(obj, 'update_operator', request.user.username)
        else:
            """添加数据时，添加创建者"""
            setattr(obj, 'create_operator', request.user.username)
        super(ArticleAdmin, self).save_model(request, obj, form, change)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'create_operator', 'update_operator', 'create_time', 'update_time')

    # 分页显示，一页的数量
    list_per_page = 10

    # 需要搜索的字段
    search_fields = ('name', 'create_operator', 'update_operator')

    # 过滤器
    list_filter = (ListFilter, 'update_time')

    def save_model(self, request, obj, form, change):
        if change:
            """修改记录时，添加修改者"""
            setattr(obj, 'update_operator', request.user.username)
        else:
            print("dadadwa")
            """添加数据时，添加创建者"""
            setattr(obj, 'create_operator', request.user.username)
        super(CategoryAdmin, self).save_model(request, obj, form, change)

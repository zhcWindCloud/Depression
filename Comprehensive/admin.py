import os

from django.conf import settings
from django.contrib import admin
from django.db.models.signals import post_delete
from django.dispatch import receiver
from django.utils.html import format_html

from Comm.Comm_Admin_Utils import ListFilter
from Comm.NUmberUtils import AddStr
# Register your models here.
# from Comm.storage import DeleteModelImgUrl
from Comprehensive.models import NavManager, Image, Visitor


@admin.register(NavManager)
class NavManagerAdmin(admin.ModelAdmin):
    list_display = (
        "show_couter", "NavName", "slug", "create_operator", "update_operator", "create_time", "update_time",)

    list_per_page = 10

    search_fields = ('title', 'create_operator', 'update_operator')

    list_display_links = ["NavName", ]

    list_filter = (ListFilter, 'update_time')

    def show_couter(self, obj):
        if len(str(obj.id)) != 6:
            return AddStr(obj.id)
        return obj.id

    show_couter.allow_tags = True
    show_couter.short_description = '序号'

    def save_model(self, request, obj, form, change):
        if change:
            """修改记录时，添加修改者"""
            setattr(obj, 'update_operator', request.user.username)
        else:
            """添加数据时，添加创建者"""
            setattr(obj, 'create_operator', request.user.username)
        super(NavManagerAdmin, self).save_model(request, obj, form, change)


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ("headImg", "create_operator", "update_operator", "create_time", "update_time",)

    list_per_page = 10

    list_filter = ("update_time",)

    """”
     :@parms 外键不应该只是一个model，而该是另一个表的明确的一个字段。所以我们需要指定特定的字段
     本表外键字段__外键所在表需查询字段
     """
    search_fields = ("header__Imgtitle",)

    def headImg(self, obj):  # imageField显示方法设置,图片路径设为显示图片
        if obj.image == "":
            return None
        return format_html('<img src="%s" height="40px" width="40px" />' % obj.image.url)

    headImg.allow_tags = True

    headImg.short_description = '轮播图片'

    def save_model(self, request, obj, form, change):
        if change:
            """修改记录时，添加修改者"""
            setattr(obj, 'update_operator', request.user.username)
        else:
            """添加数据时，添加创建者"""
            setattr(obj, 'create_operator', request.user.username)
        super(ImageAdmin, self).save_model(request, obj, form, change)

    # 删除文件同时删除资源图片文件
    """装饰器，用于将接收器连接到信号。通过传入信号（或信号列表）和关键字参数来连接："""

    @receiver(post_delete, sender=Image)
    def delete_upload_files(sender, instance, **kwargs):
        files = getattr(instance, 'image')
        if not files:
            return
        fname = os.path.join(settings.MEDIA_ROOT, str(files))
        if os.path.isfile(fname):
            os.remove(fname)


@admin.register(Visitor)
class VisitorAdmin(admin.ModelAdmin):
    list_display = ("show_couter", "OutIP", "country", "operators", "hostname", "MacAdress", "Viewtime")
    list_per_page = 10
    list_display_links = None
    list_filter = ("Viewtime",)

    def has_add_permission(self, request):
        """  添加按鈕隱藏"""
        return False

    actions = ['layer_Line', ]

    def layer_Line(self, request, queryset):
       return

    layer_Line.short_description = '数据图表'
    layer_Line.type = 'primary'
    layer_Line.icon = 'el-icon-s-promotion'
    layer_Line.layer= {}



    def show_couter(self, obj):
        if len(str(obj.id)) != 6:
            return AddStr(obj.id)
        return obj.id

    show_couter.allow_tags = True
    show_couter.short_description = '序号'

#
#
#
# class ImgLine(admin.StackedInline):
#     model = Image
#
# @admin.register(ImgManage)
# class NumberAdmin(admin.ModelAdmin):
#     list_display = ("title", "create_operator", "update_operator", "create_time", "update_time",)
#
#     list_filter = (ListFilter, 'update_time')
#
#     list_display_links = ["title",]
#
#     # raw_id_fields=("title",)
#
#     inlines = [ImgLine, ]
#
#     def save_model(self, request, obj, form, change):
#         if change:
#             """修改记录时，添加修改者"""
#             setattr(obj, 'update_operator', request.user.username)
#         else:
#             """添加数据时，添加创建者"""
#             setattr(obj, 'create_operator', request.user.username)
#         super(NumberAdmin, self).save_model(request, obj, form, change)


# @admin.register(ImgDict)
# class ImgDictAdmin(admin.ModelAdmin):
#     list_display = ("Imgtitle", "create_operator", "update_operator", "create_time", "update_time",)
#
#     list_per_page = 10
#
#     list_display_links = ["Imgtitle", ]
#
#     list_filter = ('Imgtitle',)
#
#     def save_model(self, request, obj, form, change):
#         if change:
#             """修改记录时，添加修改者"""
#             setattr(obj, 'update_operator', request.user.username)
#         else:
#             """添加数据时，添加创建者"""
#             setattr(obj, 'create_operator', request.user.username)
#         super(ImgDictAdmin, self).save_model(request, obj, form, change)

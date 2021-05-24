# 创建时间: 2021/3/18 16:31
import datetime

from django.contrib import admin

"""admin 后台管理的过滤器      时间"""


class ListFilter(admin.SimpleListFilter):
    title = u'创建时间'
    parameter_name = 'create_time'

    def lookups(self, request, model_admin):
        return (
            ('0', u'最近7天'),
            ('1', u'最近15天'),
            ('2', u'最近30天'),
        )

    def queryset(self, request, queryset):
        # 当前日期格式
        cur_date = datetime.datetime.now().date()

        if self.value() == '0':
            # 前一天日期
            day = cur_date - datetime.timedelta(days=7)
            return queryset.filter(create_time__gte=day)
        if self.value() == '1':
            day = cur_date - datetime.timedelta(days=15)
            return queryset.filter(create_time__gte=day)
        if self.value() == '2':
            day = cur_date - datetime.timedelta(days=30)
            return queryset.filter(create_time__gte=day)

# class ImgListFilter(admin.SimpleListFilter):
#     title = u'图片类型'
#     parameter_name = 'Imgtitle'
#
#     TypeList = []
#
#
#     for i in range(len(GetImgTypeServices())):
#         Tuple = (str(i),GetImgTypeServices()[i])
#         TypeList.append(Tuple)
#
#     def lookups(self, request, model_admin):
#         return tuple(self.TypeList)
#
#     def queryset(self, request, queryset):
#         pass

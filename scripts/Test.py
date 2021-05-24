"""
@Time    : 2021/4/30 15:34
@Author  : ZHC
@FileName: Test.py
@Software: PyCharm
"""

import os
import sys

import django


# 启动django
from Comm.NUmberUtils import datetime_toString


def SetUp():
    # 将django项目根目录加入环境变量
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    print(BASE_DIR)
    sys.path.append(BASE_DIR)

    # 加载 Django 项目的配置信息
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Depression.settings")
    # 启动 Django 项目
    django.setup()


if __name__ == '__main__':
    SetUp()
    from django.db import connection
    from django.db.models import Count

    from Question_Bank.models import TestPaper

    select = {'day': connection.ops.date_trunc_sql('day', 'create_time')}
    title_dict = {}
    day_list = []
    day_dict = {}
    result = TestPaper.objects.extra(select=select).values('day', "themeTitle").annotate(number=Count('*')).order_by("day",
                                                                                                                  "themeTitle")
    for res in result:
        data_list = []
        title_dict = {}
        title_dict[res.get("themeTitle")] = res.get("number")
        data_list.append(title_dict)
        if day_dict.get(datetime_toString(res.get("day"))):
            day_dict[datetime_toString(res.get("day"))] +=data_list
        else:
            day_dict[datetime_toString(res.get("day"))] = data_list
        print(res.get("number"))

    print(day_dict)





    # new_day_list = list(set(day_list))
    # new_day_list.sort(key=day_list.index)
    #
    #
    #
    # new_title_list = list(set(title_list))
    # new_title_list.sort(key=title_list.index)



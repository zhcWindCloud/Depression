"""
@Time    : 2021/5/12 4:19
@Author  : ZHC
@FileName: Test02.py
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
    title = ["贝克抑郁自评量表(BDI)", "抑郁自评量表(SDS)"]
    tester = ["大一", "大二", "大三", '大四', '大五', '未知']
    query = TestPaper.objects.filter(themeTitle=title[0]).filter(Respondents=tester[0]).values("Sex").annotate(
        number=Count("*")).order_by(
        "-Sex")
    print(query)
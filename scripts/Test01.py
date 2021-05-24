"""
@Time    : 2021/5/8 16:20
@Author  : ZHC
@FileName: Test01.py
@Software: PyCharm
"""
import os
import sys
from datetime import datetime

import django
import requests


# 启动django


def SetUp():
    # 将django项目根目录加入环境变量
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    print(BASE_DIR)
    sys.path.append(BASE_DIR)

    # 加载 Django 项目的配置信息
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Depression.settings")
    # 启动 Django 项目
    django.setup()


def getip(ip, count):
    count = int(count)
    ip2 = int(ip.split('.')[-2])
    ip1 = int(ip.split('.')[-1])
    ip_before = '%s.%s' % (ip.split('.')[0], ip.split('.')[1])
    IP_list = []
    for i in range(0, count):
        new_ip1 = ip1 + i
        if 11 <= new_ip1 <= 254:
            IP_list.append('{}.{}.{}'.format(ip_before, str(ip2), str(new_ip1)))
        else:
            new_ip2 = ip2 + int(new_ip1 / 254)
            new_ip1 = new_ip1 % 254 + 10
            IP_list.append('{}.{}.{}'.format(ip_before, str(new_ip2), str(new_ip1)))

    return IP_list


'''
测试查找IP地址'''


def GetIPAdress(IP):
    url = "http://api.guajicun.com/GetIp/default.aspx?queryIp=" + str(IP)
    response = requests.get(url)
    return response


def GetRandomDateTime(year=None):
    if year:
        month = random.randint(1, 12)
        if month in [1, 3, 5]:
            date = datetime(year, month, random.randint(1, 31), random.randint(0, 23), random.randint(0, 59),
                            random.randint(0, 59))
            return date
        elif month == 2:
            return datetime(year, month, random.randint(1, 28), random.randint(0, 23), random.randint(0, 59),
                            random.randint(0, 59))
        elif month == 4:
            return datetime(year, random.randint(1, 12), random.randint(1, 30), random.randint(0, 23),
                            random.randint(0, 59),
                            random.randint(0, 59))


def GetBroser():
    l = ["QQQBrowser 6.2", "QQQBrowser 10.7.4313.400", "Chrome 90.0.4430.93", "Edge 90.0.818.56", "safari 4.0"]
    new_list = ["Android 32位", "Android 64位", "Win10 64位", "Win7 64位", "Win7 32位", "Win8 64位", "Win8 32位"]
    return random.choice(l), random.choice(new_list)


if __name__ == '__main__':
    SetUp()
    from Question_Bank.models import TestPaper
    import random

    IP_list = ["贝克抑郁自评量表(BDI)", "抑郁自评量表(SDS)"]
    l = []
    grade_l = ["大一", "大二", "大三", '大四', '大五', '未知']
    sex_l = ["男", "女"]
    t = str(random.randint(1, 9)) + str(random.random)
    for x in getip('101.26.31.147', 1000):
        try:
            title = random.choice(IP_list)
            if title == "贝克抑郁自评量表(BDI)":
                TestPaper.objects.create(themeTitle=title, answer_score=random.randint(20 * 1.25, 80 * 1.25),
                                         Sex=random.choice(sex_l),
                                         Respondents=random.choice(grade_l), Timing=str(random.random),
                                         OutIP=x)
            else:
                TestPaper.objects.create(themeTitle=title, answer_score=random.randint(20 * 1.25, 80 * 1.25),
                                         Sex=random.choice(sex_l),
                                         Respondents=random.choice(grade_l), Timing=str(random.random),
                                         OutIP=x)
            print("完成")
        except Exception as  e:
            print("错误", e)

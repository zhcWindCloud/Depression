# 创建时间: 2021/4/2 16:45
import random
import time
from datetime import datetime


def AddStr(num):
    """编号序号"""
    number = len(str(num))
    if number == 5:
        return "0" + str(num)
    elif number == 4:
        return "00" + str(num)
    elif number == 3:
        return "000" + str(num)
    elif number == 2:
        return "0000" + str(num)
    elif number == 1:
        return "00000" + str(num)
    return str(num)


def GetSixNumber():
    """菜单随机编号"""
    string = ''
    for item in range(6):
        num = random.randint(0, 9)
        string = string + str(num)
    return string



def datetime_toString(dt):
    """# 把datetime转成字符串"""
    return dt.strftime("%Y-%m-%d")



def string_toDatetime(string):
    """# 把字符串转成datetime"""
    return datetime.strptime(string, "%Y-%m-%d %H:%S:%M")



def string_toTimestamp(strTime):
    """# 把字符串转成时间戳形式"""
    return time.mktime(string_toDatetime(strTime).timetuple())



def timestamp_toString(stamp):
    """# 把时间戳转成字符串形式"""
    return time.strftime("%Y-%m-%d-%H", time.localtime(stamp))



def datetime_toTimestamp(dateTim):
    """把datetime类型转外时间戳形式"""
    return time.mktime(dateTim.timetuple())

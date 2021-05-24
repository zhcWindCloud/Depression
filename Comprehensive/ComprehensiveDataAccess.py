# 创建时间: 2021/4/5 22:40
from .models import *


# def SelectImgType():
#     """查找所有的图片类型"""
#     query = ImgDict.objects.all()
#     return  query

def SelectMuen(slug):
    """查找菜單"""
    try:
        query = NavManager.objects.get(slug=slug)
        return query
    except:
        pass
    return None


def SelectAllMuen():
    """查找菜所有單"""
    query = NavManager.objects.all()
    return query


def SelectSlideImg():
    """查询轮播图"""
    query = Image.objects.all()
    return query

# 创建时间: 2021/4/7 22:11
from .models import *


def SelectArticle(art):
    """按文章分类条件查询所有文章"""
    article_query = Article.objects.filter(category=art)
    return article_query


def SelectArt(meun):
    """按菜单分类查询所有文章"""
    article_query = Article.objects.filter(NavMeun=meun)
    return article_query


def SelectAllArticleType():
    """"获取所有的文章类型"""
    query = Category.objects.all()
    return query


def SelectOneArticle(ID, slug):
    """根据ID以及slug查询文章"""
    try:
        query = Article.objects.get(id=ID, slug=slug)
        return query
    except:
        pass
    return []


def AddOneArticleCount(obj):
    """添加文章浏览次数"""
    try:
        query = obj
        query.reading += 1
        query.save()
        return 1
    except:
        pass

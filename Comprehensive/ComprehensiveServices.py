# 创建时间: 2021/3/24 17:33
from Article.ArticleDataAccess import SelectArticle, SelectAllArticleType, SelectArt
from Comm.NUmberUtils import datetime_toString
from Question_Bank.Question_BankDataAccess import *
from .ComprehensiveDataAccess import *


def GetMuenServices(slug):
    """查找某个菜單"""
    return SelectMuen(slug)


def GetAllMuen():
    """查找所有菜單"""
    return SelectAllMuen()


def GetAllTypeServices():
    """查询所有的类型表"""
    return GetAllType()


def GetFormatArticleServices():
    """查找文章"""
    query = SelectAllArticleType().order_by("id")
    list = []
    for item in query:
        article_dict = {}
        article_dict[item.name] = SelectArticle(item.id)[0:5]
        list.append(article_dict)
    return list


def GetFormatArtServices(slug):
    """利用菜单slug文查找文章"""
    query = SelectMuen(slug)
    if query:
        Article = SelectArt(query.id)
    return Article


def GetQuestionServices(slug):
    """根据菜单slug 查询 问卷表"""
    query = SelectMuen(slug)
    if query:
        Questions = SelectQuestionType(query.id)
    return Questions


def GetSlideImgServices():
    """获取轮播图"""
    query = SelectSlideImg()
    return query


def GetResultData():
    """获取问卷表的分数一系列的结果"""
    query = SelectResultData()
    title_dict = {}
    title_list = []
    day_list = []
    day_dict = {}
    for res in query:
        data_list = []
        title_dict = {}
        title_dict["title"]  =  res.get("themeTitle")
        title_dict["number"] =  res.get("number")
        data_list.append(title_dict)
        if day_dict.get(datetime_toString(res.get("day"))):
            day_dict[datetime_toString(res.get("day"))] += data_list
        else:
            day_dict[datetime_toString(res.get("day"))] = data_list
        title_list.append(res.get("themeTitle"))

    new_title_list = list(set(title_list))
    new_title_list.sort(key=title_list.index)

    return [day_dict,new_title_list]

def GetVisitorData():
    """获取来访记录信息"""
    query = SelectVisitorData()
    date_list = []
    number_list = []
    for res in query:
        date_list.append(datetime_toString(res.get("day")))
        number_list.append(res.get("number"))

    return  [date_list,number_list]


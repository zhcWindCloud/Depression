import datetime,re

from django import template

from Comm.FormatUtils import str_insert
from Comprehensive.ComprehensiveServices import GetAllMuen

# 注册
register = template.Library()





@register.filter(name="key")
def key(tem_dict):
    if tem_dict:
        try:
            keyval = list(set(tem_dict.keys()))[0]
        except KeyError:
            keyval = ""
        return keyval
    return "暂无"


@register.filter(name="val")
def val(tem_dict):
    if tem_dict:
        try:
            value = list(set(tem_dict.values()))[0]
        except KeyError:
            value = ""
        return value


@register.filter(name="Tem_lenth")
def Tem_lenth(val):
    value = val[:3]
    return value

@register.filter(name="spli")
def spli(tem_dict):
    if tem_dict:
        value = tem_dict[0:80] + "....."
        return value

    return "暂无内容"


@register.filter(name="splip")
def splip(tem_dict):
    if tem_dict:
        try:
            value = tem_dict[0:100] + "..............."
        except KeyError:
            value = ""
        return value


@register.filter(name="splip1")
def splip(tem_dict):
    if tem_dict:
        try:
            value = tem_dict[0:100]
        except KeyError:
            value = ""
        return value


@register.filter(name="FormatStr")
def FormatStr(tem_dict):
    if tem_dict:
        try:
            value = tem_dict[1:]
        except KeyError:
            value = ""
        return value


@register.filter(name="ParsStr")
def ParsStr(num):
    """数字转化字符串"""
    try:
        return str(num)
    except:
        pass


@register.filter(name="ForamatString")
def ForamatString(string):
    """字符串格式化"""
    try:
        return string[1:]
    except:
        pass


@register.filter(name="FormatString")
def FormatString(string):
    """字符串缩短"""
    if len(string) > 14:
        return string[:14] + "...."
    return string

@register.filter(name="FormatDate")
def FormatDate(date):
    """格式化时间"""
    #按照format格式返回时间
    formatDate =datetime.date.isoformat(date)
    return  formatDate


@register.filter(name="AddStrHtml")
def AddStrHtml(html):
    """为html添加样式"""
    newHtml =   str_insert(html,"</p>","</p><br>")
    return   newHtml

@register.filter(name="FormatAuthor")
def FormatAuthor(author):
    """格式化作者"""
    if author:
        return author
    return "暂无"



@register.filter(name="GetArticleCount")
def GetArticleCount(article):
    """点击进入菜单的文章展示数"""
    Article = article[:5]
    return  Article

@register.filter(name="Forb")
def Forb(score):
    """乘数"""
    GetScore = int(score*1.25)
    return GetScore
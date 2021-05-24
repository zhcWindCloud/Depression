# 创建时间: 2021/4/7 22:11
from Article.ArticleDataAccess import SelectOneArticle, AddOneArticleCount


def GetArticleServices(ID,slug):
    """按条件获取文章"""
    articlelist = SelectOneArticle(ID,slug)
    #浏览次数加1 但是bug很多 不安全
    #要是一直刷新那就崩了
    AddOneArticleCount(articlelist)
    return articlelist



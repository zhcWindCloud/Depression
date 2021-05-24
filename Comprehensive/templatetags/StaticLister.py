# 创建时间: 2021/4/8 16:14
import datetime

from django import template

from Comprehensive.ComprehensiveServices import GetAllMuen, GetFormatArticleServices, GetSlideImgServices, \
   GetFormatArtServices

# 注册
from Comprehensive.templatetags.FormatFilter import FormatStr

register = template.Library()



@register.inclusion_tag('TagTemplates/CommHead.html')
def GetMeun():
   Title = GetAllMuen()
   return {"Title":Title}


@register.inclusion_tag('TagTemplates/SlideImg.html')
def GetSlideImg():
   SlideImg = GetSlideImgServices()
   return {"SlideImg":SlideImg}



@register.inclusion_tag('TagTemplates/ArticleList.html')
def GetArticle_Catroy():
   Article_Catroy = GetFormatArticleServices()[:4]
   return {"Article_Catroy": Article_Catroy}



# @register.inclusion_tag('TagTemplates/ArticleList.html')
# def GetArticle_Catroy():
#    Article_Catroy = GetFormatArticleServices()[:4]
#    return {"Article_Catroy": Article_Catroy}






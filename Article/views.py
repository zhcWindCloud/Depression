from django.http import JsonResponse
from django.shortcuts import render
# Create your views here.
from django.views import View

from Article.ArticleServices import GetArticleServices
from Comm.ResultUtils import ResultObj
from Comprehensive.ComprehensiveServices import GetMuenServices, GetResultData
from Comprehensive.templatetags.FormatFilter import FormatStr


def article_detail(request, meun, id, slug):
    """
    获取文章详
    @parms： meun 菜单slug
    @parms: id 文章id
    @parms： slug 文章的slug
    """

    if meun and id and slug:
        Article = GetArticleServices(id, slug)
        if Article:
            return render(request, "Comm/ArticleTemplates.html", locals())
    return render(request, '404.html')


def ArticleDetail(request, id, slug):
    """
    菜单名为空的时候获取文章详
    @parms: id 文章id
    @parms： slug 文章的slug
    """
    if id and slug:
        Article = GetArticleServices(id, slug)
        if Article:
            return render(request, "Comm/ArticleTemplates.html", locals())
    return render(request, '404.html')


class LineCharts(View):
    """折线图"""
    def get(self, request):
        return render(request, 'echarts/LineChart.html')

    def post(self, request):
        res = ResultObj().GetResult(GetResultData())
        return JsonResponse(res, content_type="application/json")


class Histogram(View):
    """柱状图"""

    def get(self, request):
        return render(request, 'echarts/Histogram.html')

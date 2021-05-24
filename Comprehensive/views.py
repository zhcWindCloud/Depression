from django.http import JsonResponse
from django.shortcuts import render, render_to_response,HttpResponse
from django.views import View

from Comm.FormatUtils import FormatStr
from Comm.ResultUtils import ResultObj
from Comprehensive.ComprehensiveServices import GetMuenServices, GetFormatArticleServices, GetFormatArtServices, \
    GetQuestionServices, GetVisitorData


# def te():
#     if request.META.get('HTTP_X_FORWARDED_FOR'):
#         ip = request.META.get("HTTP_X_FORWARDED_FOR")
#     else:
#         ip = request.META.get("REMOTE_ADDR")
#     print(ip)
#
#     print(request.environ.get('HTTP_USER_AGENT'))
# Create your views here.


def page_not_found(request, exception):
    """自定义404"""
    print(exception)
    return render_to_response('404.html')


def GoIndex(request):
    """进入首页"""
    Article = GetFormatArticleServices()
    print("""进入首页""",Article)
    return render(request, 'base.html', locals())


def GetNavName(request, slug):
    """导航栏进入文章列表"""

    """分页处理显示
    :param  @limit 代表每页的显示数量
     :param @curr  代表 当前页
     """
    limit = request.GET.get("limit", None)
    curr = request.GET.get("curr", None)
    try:
        if slug:
            Muen = GetMuenServices(FormatStr(slug))
            # 根据分类查找文章
            Article_Catroy = GetFormatArticleServices()
            # 文章查找
            Article = GetFormatArtServices(FormatStr(slug))
            # 问卷查找
            Questions = GetQuestionServices(FormatStr(slug))
            if curr and limit:
                # 文章篇数分页
                Article = GetFormatArtServices(FormatStr(slug))[(int(curr) - 1) * int(limit):int(limit) * int(curr)]
                # 问卷篇数分页
                Questions = GetQuestionServices(FormatStr(slug))[(int(curr) - 1) * int(limit):int(limit) * int(curr)]
                return render(request, 'TagTemplates/ArticleTitle.html', locals())
            return render(request, 'body.html', locals())
    except Exception as e:
        print(e)
    return render(request, '404.html')


class ChartData(View):
    def get(self,request):
        """获取来访记录界面"""
        return render(request, template_name="echarts/VisitorLine.html")
    def post(self,request):
        """获取来访记录数据"""
        res = ResultObj().GetResult(GetVisitorData())
        return JsonResponse(res, content_type="application/json")

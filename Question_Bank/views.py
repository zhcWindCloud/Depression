from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from django.views import View

from Comm.FormatUtils import FormatScore
from Question_Bank.Question_BankServices import *


# Create your views here.

# 饼图图表#
def GetPieData(request):
    title = request.GET.get("title", None)
    TestPaper = ResultObj().GetResult(GetTestPaperServices(title))
    print(TestPaper)
    return JsonResponse(TestPaper, content_type="application/json")



def GetColData(request):
    """柱状图"""
    title = request.GET.get("title")
    TestPaper = ResultObj().GetResult(GetTestPaperService(title))
    return JsonResponse(TestPaper, content_type="application/json")


# 查询所有的类
def GetAllType(request):
    TitleType = ResultObj().GetResult(GetAllTypeServices())
    return JsonResponse(TitleType, content_type="application/json")


# 获取测试题的一份数据(用于打印
def GetPrintData(request, id, slug):
    try:
        quert_set = SearchTypeServices(id)
        if quert_set.slug == slug:
            query = GetTypePaperServices(quert_set.themeTitle)
            return render(request, 'Print.html', locals())
    except Exception as e:
        print(e)
    return render(request, "404.html")


# 根据标题查找测试题库(专用于问卷填写
class TestPaper(View):
    def get(self, request, id, slug):
        try:
            quert_set = SearchTypeServices(id)
            if quert_set.slug == slug:
                query = GetPaperTestServices(quert_set.themeTitle)
                score = GetMinxScorePaperServices(quert_set.themeTitle)
                grade = ["大一", '大二', '大三', '大四', '大五', '未知']
                return render(request, 'Question_Test.html', locals())
        except Exception as e:
            print(e)
        return render(request, "404.html")

    def post(self, request, id, slug):
        if id and slug and request.POST.dict():
            Result = AddScorePaperServices(id, slug, request.POST.dict())
        return JsonResponse(Result, content_type="application/json")




def GetScoreResult(request, score, id, slug):
    """获取问卷分数的结果
    @score : 分数
    @id ：试题id
    @slug： 标题slug
    """
    try:
        quert_set = SearchTypeServices(id)
        if quert_set.slug == slug:
            #获取评分等级的结果
            query = GetScoreResultServices(quert_set, FormatScore(quert_set,score))
            #获取填写的问卷结果
            Test_query = GetTestResultServices(slug,FormatScore(quert_set,score))
            #根据slug查找之外的问卷类型
            question_query = GetPartQuestions(slug)
            return render(request, 'ScoreResult.html', locals())
    except Exception as e:
        print(e)
    return render(request, "404.html")

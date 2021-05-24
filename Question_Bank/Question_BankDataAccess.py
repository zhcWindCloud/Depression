# 创建时间: 2021/3/16 23:20
from django.db import connection
from django.db.models import Max, Count

from Comm.IPUtils import GetIPAdress
from Comm.ResultUtils import *
from Comprehensive.models import Visitor
from Question_Bank.models import *


def GetTypePaper(title):
    """ 根据试题属性id获取测试题的一份数据"""
    dict = {}
    for qs in SearchTypePaper(title):
        query = AnswerPaper.objects.filter(questions=qs.pk).order_by('pk')
        dict[qs.title] = query
    return dict


def GetMinxScorePaper(title):
    """ 根据试题属性id获取测试题的最大数值"""
    score = 0
    for qs in SearchTypePaper(title):
        try:
            query = AnswerPaper.objects.filter(questions=qs.pk).aggregate(Max("answer_score"))
            score = score + query.get("answer_score__max", 0)
        except Exception as  e:
            print(e)
    return score


def SearchTypePaper(title):
    """ 根据试题属性查找相对应答案"""
    Title = SearchType(title).id
    query = QuestionPaper.objects.filter(Subject=Title).order_by('pk')
    return query


def SearchType(title):
    """ 根据标题查找问卷类型"""
    try:
        query = ParentQuestions.objects.get(themeTitle=title)
    except Exception as e:
        print(e)
    return query


def SelectPartQuestions(slug):
    """根据slug查找之外的问卷类型"""
    query = ParentQuestions.objects.exclude(slug=slug)
    return query


def SearchTypeID(ID):
    """根据标题id查找问卷类型"""
    try:
        query = ParentQuestions.objects.get(pk=ID)
        return query
    except Exception as e:
        print("异常：", e)
    return None


def GetAllTestPaper():
    """ 查询所有的答卷表"""
    query = TestPaper.objects.all()
    return query


def GetPartTestPaper(title):
    """
    查询部分答卷表数据
     parms:title 表参数
     """
    query = TestPaper.objects.filter(themeTitle=title).order_by("themeTitle")
    return query


def GetPartTestPapers(title, tester):
    """ 按条件查询测试者的最高以及最低分"""
    query = TestPaper.objects.filter(themeTitle=title).filter(Respondents=tester).values("Sex").annotate(number=Count("*")).order_by(
        "-Sex")
    return query


def GetAllType():
    """ 查询所有的类型表"""
    query = ParentQuestions.objects.all()
    return query


def SelectQuestionType(slug):
    """根据slug查询问卷类型表"""
    query = ParentQuestions.objects.filter(NavMeun=slug)
    return query


def AddScorePaper(title, score, sex, gender, timing,ip, hostname, OS):
    """ 根据填写的内容 添加分数试卷"""
    try:
        IP = GetIPAdress(ip).get("ip", None)
        Country = GetIPAdress(ip).get("country","")+','+GetIPAdress(ip).get("region","")+','+GetIPAdress(ip).get("city","")

        Operators ="中囯" + GetIPAdress(ip).get("as",None)
        TestPaper.objects.create(themeTitle=title, answer_score=score, Sex=sex, Respondents=gender, Timing=str(timing),
                                 OutIP=IP)
        Visitor.objects.create(OutIP=IP, country=Country, operators=Operators, hostname=hostname, MacAdress=OS)
        return ResultObj().GetResult("成功")
    except Exception as e:
        print("异常：", e)
    return ResultObj().GetResult("失败")


def GetScoreResult(title):
    """获取分数结果
    parms:title  问卷名称
    """
    query = ScorePaper.objects.filter(Subject=title.id)
    return query


def SelectTestResult(slug, score):
    """根据slug和 score 查找 最新的问卷"""
    try:
        query = TestPaper.objects.filter(slug=slug, answer_score=score).order_by("-create_time", '-id')
    except Exception as e:
        print("根据slug和 score 查找 最新的问卷", e)
    return query


def SelectResultData():
    """查找问卷结果表的数据
    # 语法:
    values('分组字段').annotate(别名=聚合函数('字段'))
    """
    select = {'day': connection.ops.date_trunc_sql('day', 'create_time')}
    query = TestPaper.objects.extra(select=select).values('day', "themeTitle").annotate(number=Count('*')).order_by(
        "day", "themeTitle")
    return query

def SelectVisitorData():
    """查找问卷结果表的数据
    # 语法:
    values('分组字段').annotate(别名=聚合函数('字段'))
    """
    select = {'day': connection.ops.date_trunc_sql('day', 'Viewtime')}
    query = Visitor.objects.extra(select=select).values('day').annotate(number=Count('*')).order_by(
        "day")
    return query

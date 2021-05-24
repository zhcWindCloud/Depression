# 创建时间: 2021/3/16 23:17
import math

from Question_Bank.Question_BankDataAccess import *


def GetTestPaperServices(title):
    """查询不同类型的答卷表"""

    list = []
    if title is None:
        return list
    query = GetPartTestPaper(title)
    query_dict = {}
    for qs in query:
        if qs.Respondents == "大一":
            query_dict[qs.Respondents] = query_dict.get(qs.Respondents, 0) + 1
        elif qs.Respondents == "大二":
            query_dict[qs.Respondents] = query_dict.get(qs.Respondents, 0) + 1
        elif qs.Respondents == "大三":
            query_dict[qs.Respondents] = query_dict.get(qs.Respondents, 0) + 1
        elif qs.Respondents == "大四":
            query_dict[qs.Respondents] = query_dict.get(qs.Respondents, 0) + 1
        elif qs.Respondents == "大五":
            query_dict[qs.Respondents] = query_dict.get(qs.Respondents, 0) + 1
        elif qs.Respondents == "未知":
            query_dict[qs.Respondents] = query_dict.get(qs.Respondents, 0) + 1
    list.append(str(title) +"的测试人数")
    for key, val in query_dict.items():
        qs = {}
        qs["name"] = key
        qs["value"] = val
        list.append(qs)
    return list


def GetTestPaperService(title):
    """ 柱状图显示"""
    query_list, Test_list, male_list, famale_list = [], ["大一", "大二", "大三", '大四', '大五', '未知'], [], []
    if title is None:
        return list

    for qs in Test_list:
        try:
            if GetPartTestPapers(title, qs).count()>1:
                maleNumber = GetPartTestPapers(title, qs).first().get("number")
                male_list.append(maleNumber)
                famaleNumber = GetPartTestPapers(title, qs).last().get("number")
                famale_list.append(famaleNumber)
            else:
                maleNumber = GetPartTestPapers(title, qs).first().get("number")
                male_list.append(maleNumber)
                famale_list.append(0)
        except Exception as e:
            male_list.append(0)
            famale_list.append(0)

    query_list.append(title)
    query_list.append(Test_list)
    query_list.append(male_list)
    query_list.append(famale_list)

    return query_list


def GetAllTypeServices():
    """ 查询所有的类型表"""
    list = []
    query = GetAllType()
    for title in query:
        list.append(title.themeTitle)
    return list


def GetTypePaperServices(title):
    """ 获取测试题的一份数据(用于打印)"""
    num_list = []
    query = GetTypePaper(title)
    # 分页
    for num in range(math.ceil(len(query) / 3)):
        num_list.append(dict_slice(query, num * 3, num * 3 + 3))
    return num_list


def GetPaperTestServices(title):
    """ 根据标题查找测试题库(专用于问卷填写)"""
    query = GetTypePaper(title)
    return query


def GetMinxScorePaperServices(title):
    """ 根据试题属性id获取测试题的最大数值"""
    Score = GetMinxScorePaper(title)
    return Score


def SearchTypeServices(id):
    """ 根据标题查找问卷类型"""
    try:
        query = SearchTypeID(id)
    except Exception as e:
        print("异常：", e)
    return query


def AddScorePaperServices(id, slug, obj):
    """ 根据填写的内容 添加分数试卷"""
    score = obj.get("arry", 0)
    sex = obj.get("grade", None)
    gender = obj.get("gender", None)
    timing = obj.get("timing", None)
    timing = obj.get("timing", None)
    broswer = obj.get("broswer", None)
    version = obj.get("version", None)
    ip = obj.get("ip", None)
    OS = obj.get("OS", None)
    print(obj)
    try:
        hostname = broswer + " " + version
        query = SearchTypeID(id)
        if query.slug == slug:
            if query.is_Open:
                Score = int(int(score) * 1.25)
                return AddScorePaper(query.themeTitle, Score, sex, gender, timing, ip, hostname, OS)
            return AddScorePaper(query.themeTitle, int(score), sex, gender, timing, ip, hostname, OS)
    except Exception as e:
        print("异常：", e)
    return ResultObj().GetResult("失败")


def GetScoreResultServices(title, Score):
    """获取分数结果
    parms:title  问卷名称 (对象)

    parms:score 填写问卷分数
    """
    query = GetScoreResult(title)
    ls = [query]
    for qs in query:
        if qs.min_score <= Score <= qs.max_score:
            ls.insert(0, qs.grade)
    return ls


def GetTestResultServices(slug, score):
    """根据slug和 soce 获取最新的测试问卷 """
    query = SelectTestResult(slug, score)
    try:
        last_query = query.first()
        return last_query
    except Exception as e:
        print(e)
    return query


def GetPartQuestions(slug):
    """ 根据slug查找之外的问卷类型"""
    query = SelectPartQuestions(slug)
    return query[:3]

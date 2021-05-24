# 创建时间: 2021/4/5 16:24

from pypinyin import lazy_pinyin
import  re


def FormatPinyin(string):
    """中文转为拼音格式化工具"""
    stringList = lazy_pinyin(string)
    String = ''
    for st in stringList:
        String = String + st
    return String


def FormatStr(string):
    """格式化字符串"""
    String = "/" + string
    return String


# 在字符串指定位置插入字符
# str_origin：源字符串  str_pos：要替换的字符串  str_add：待替换的字符串
#
def str_insert(str_origin,str_pos,str_add):
    str_new = str_origin.replace("<p>", '<p style="text-indent: 2em;">', 9999)
    str_out = str_new.replace(str_pos,str_add,9999)

    return str_out


def FormatScore(quert_set,sorce):
    if quert_set.is_Open:
        Score = int(int(sorce)*1.25)
        return Score
    return int(sorce)
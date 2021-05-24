"""
@Time    : 2021/5/15 13:23
@Author  : ZHC
@FileName: Test_AddAtricle.py
@Software: PyCharm
"""
import os
import re
import sys

import django
import requests
from bs4 import BeautifulSoup
# 启动django
from fake_useragent import UserAgent


def SetUp():
    # 将django项目根目录加入环境变量
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    print(BASE_DIR)
    sys.path.append(BASE_DIR)

    # 加载 Django 项目的配置信息
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Depression.settings")
    # 启动 Django 项目
    django.setup()


def GetArticleTitle(headers):
    url = ''
    title_dict = {}

    for i in ["news"]:
        for x in range(4):
            if x == 0:
                url = 'http://www.yiyuzheng.com.cn/{0}/index.html'.format(i)
            else:
                url = 'http://www.yiyuzheng.com.cn/{0}/index_{1}.html'.format(i, x + 1)
            ht = requests.get(url, headers=headers)
            ht.encoding = 'utf-8'
            bs = BeautifulSoup(ht.text, 'lxml')
            soup_list = bs.findAll("a", attrs={"title": re.compile('\w+')})
            for soup in soup_list[:5]:

                if soup.get("title") == 'Total record':
                    pass
                else:
                    img = soup.find("img", attrs={"alt": re.compile('\w+')})
                    if img:
                        img_list = []
                        img_list.append("http://www.yiyuzheng.com.cn" + soup.get("href"))
                        if re.compile('http').search(img.get("src")):
                            img_list.append(img.get("src"))
                        else:
                            img_list.append("http://www.yiyuzheng.com.cn" + img.get("src"))
                        title_dict[soup.get("title")] = img_list

    return title_dict


def GetArticleDetail(ArticleTitle, headers):
    title_dict = {}
    for title, val in ArticleTitle.items():
        html = requests.get(val[0], headers)

        html.encoding = 'utf-8'
        bs = BeautifulSoup(html.text, 'lxml')
        soup = bs.find("div", attrs={"class": "htmlcontent"})
        title_dict[title] = soup.get_text().strip()

    return title_dict


if __name__ == '__main__':
    SetUp()

    from Article.models import Article, Category
    from Comprehensive.models import NavManager

    Cate_list = [1, 2, 4]
    nav_list = [4, 6, 7]
    ua = UserAgent()
    data_list = []
    name =['202105151655292.jpg', '202105151655306.jpg', '202105151655328.jpg', '202105151655334.jpg', '202105151655345.jpg', '202105151655354.jpg', '202105151655363.jpg', '202105151655379.jpg', '202105151655395.jpg', '202105151655411.jpg', '202105151655422.jpg', '202105151655439.jpg', '202105151655456.jpg', '202105151655468.jpg', '202105151655471.jpg', '202105151655488.jpg', '202105151655498.jpg', '202105151655503.jpg', '202105151655522.jpg', '202105151655538.jpg', '202105151655556.jpg', '202105151655565.jpg', '202105151655586.jpg', '202105151655592.jpg', '202105151656002.jpg', '202105151656016.jpg', '202105151656021.jpg', '202105151656047.jpg', '202105151656058.jpg', '202105151656068.jpg', '202105151656081.jpg', '202105151656103.jpg', '202105151656117.jpg', '202105151656128.jpg', '202105151656142.jpg', '202105151656159.jpg', '202105151656165.jpg', '202105151656186.jpg', '202105151656198.jpg', '202105151656237.jpg', '202105151656249.jpg', '202105151656265.jpg', '202105151656274.jpg', '202105151656294.jpg', '202105151656304.jpg', '202105151656322.jpg', '202105151656330.jpg', '202105151656345.jpg', '202105151656357.jpg', '202105151656379.jpg', '202105151656382.jpg', '202105151656392.jpg', '202105151656403.jpg', '202105151656416.jpg', '202105151656420.jpg', '202105151656431.jpg', '202105151656453.jpg', '202105151656469.jpg', '202105151656473.jpg', '202105151656488.jpg', '202105151656516.jpg', '202105151656528.jpg', '202105151656534.jpg', '202105151656549.jpg', '202105151656559.jpg']

    headers = {"User-Agent": ua.random}
    numner =0
    for Title, val in GetArticleDetail(GetArticleTitle(headers), headers).items():
        cateObj = Category.objects.get(id=2)
        Meun = NavManager.objects.get(id=6)
        try:
            path =r"upload/WebImg/Article/20210515/{0}".format(name[numner])
            Article.objects.create(title=Title, category=cateObj, NavMeun=Meun, content_raw=val,
                                   create_operator="admin",image=path)
            numner += 1
        except Exception as e:
            print(e)

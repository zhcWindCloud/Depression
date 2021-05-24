# 创建时间: 2021/3/16 23:33

from django.urls import path, re_path

from . import views

app_name = "Question_Bank"
urlpatterns = [
    path(r'GetPieData/', views.GetPieData, name="GetPieData"),
    path(r'GetColData/', views.GetColData, name='GetColData'),
    path(r'GetAllType/', views.GetAllType, name='GetAllType'),
    re_path(r'GetPrintData/title=(?P<id>\d+)&slug_title=(?P<slug>[-\w]+).html$', views.GetPrintData,
            name="GetPrintData"),
    re_path(r'TestPaper/(?P<id>\d+)/(?P<slug>[-\w]+).html$', views.TestPaper.as_view(), name="TestPaper"),
    re_path(r'GetScoreResult/(?P<score>\d+)/(?P<id>\d+)/(?P<slug>[-\w]+)$', views.GetScoreResult,
            name="GetScoreResult"),
]

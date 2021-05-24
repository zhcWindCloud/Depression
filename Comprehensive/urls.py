# 创建时间: 2021/3/24 17:24

from django.urls import path, re_path

from . import views

app_name = "Comprehensive"
urlpatterns = [
    path("", views.GoIndex, name="GoIndex"),
    path("shouye/", views.GoIndex, name="GoIndex"),
    path("chart_data/", views.ChartData.as_view(), name="chart_data"),
    re_path(r'(?P<slug>[-\w]+)/$', views.GetNavName, name="GetNavName"),

]

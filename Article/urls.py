# 创建时间: 2021/3/17 20:45


from django.urls import re_path, path

from . import views

app_name = "Article"
urlpatterns = [
    # path('article-content/<int:id>/<slug:slug>/', list_views.article_detail, name="article_content"),
    re_path('(?P<meun>[-\w]+)/Article/article-detail/(?P<id>\d+)/(?P<slug>[-\w]+)$', views.article_detail,
            name="article_detail"),
    #当菜单为空的时候
    re_path('Article/article-detail/(?P<id>\d+)/(?P<slug>[-\w]+)$', views.ArticleDetail,
            name="ArticleDetail"),
    re_path(r"admin/LineCharts/", views.LineCharts.as_view(), name="LineCharts"),
    re_path(r"admin/Histogram/", views.Histogram.as_view(), name="Histogram"),

]

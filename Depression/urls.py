"""Depression URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from Comm import *
from Comprehensive import views

urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('Question_Bank/', include('Question_Bank.urls')),
                  path('', include('Article.urls')),
                  path('', include('Comprehensive.urls')),
                  # path(r'^captcha/', include('captcha.urls')),
                  path(r'mdeditor/', include('mdeditor.urls')),
                  # 处理图片显示的url,使用Django自带serve,传入参数告诉它去哪个路径找，我们有配置好的路径MEDIAROOT
                  # 此代码是能使<img src="/media/booktest/jobs.png" width="100px">能在页面显示的关键所在
                  # re_path(r'^media/(?P<path>.*)', serve, {"document_root": settings.MEDIA_ROOT}),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
#
# if settings.DEBUG is False:
#     urlpatterns += urlpatterns( ' ',path(r'^static/(?P.*)$', 'django.views.static.serve', { 'document_root': settings.STATIC_ROOT,}))


handler404 = views.page_not_found

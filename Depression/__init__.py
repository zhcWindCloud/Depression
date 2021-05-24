# 对于python3的使用者们还需要再加一步操作
# 由于Django内部连接MySQL时使用的是MySQLdb模块，而python3中还无此模块，所以需要使用pymysql来代替

# 如下设置放置的与project同名的配置的 __init__.py文件中
from django.contrib import admin

admin.AdminSite.site_header = '大学生抑郁症测试系统'
admin.AdminSite.site_title = '大学生抑郁症测试系统'

#Django官方已经不建议使用pymysql库了，而是改用mysqlclient

# pymysql.install_as_MySQLdb()

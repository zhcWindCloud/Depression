# Depression

本项目现在所有测试的个人项目(事先声明写的不好哈 请多指教)

一、安装工具

总：
或者运行
pip install -r requirements.txt

1、python3.9 

链接：https://www.python.org/downloads/

2、django

django 是python的一个包 

使用 pip install django== 版本号

3、pycharm

链接：https://pan.baidu.com/s/1yo1AUWU9LnjvlX8xVAc9dw 

提取码：1q1j 




二、运行步骤

1、数据库配置

在 Drepression 的python包下找到 setting.py文件

然后找到 DATABASES 。

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',  #此次修改为你想要连接的数据库
        'NAME': 'depression', #数据库名
        'USER': 'root',     #数据库用户名
        'PASSWORD': 'root',  #数据库密码
        'HOST': '127.0.0.1', #本机环回地址  或者 改为 "localhost"
        'PORT': '3306',   # 数据库端口号
    }
}

本项目以mysql5.7为例 

 具体的配置其他数据库方式：

 https://docs.djangoproject.com/en/2.2/ref/settings/#databases

2、数据库配置完以后，进行数据库的迁移

 在python 的命令终端 中输入

 #数据库迁移
 python manage.py makemigrations

 #数据库生成
 python manage.py migrate

 3、迁移完所有文件以后运行
 在python命令终端 输入
 python manage.py runserver 

# 创建时间: 2021/3/17 20:30

import os
import random
import time

from django.conf import settings
# 给上传的图片重命名
from django.core.files.storage import FileSystemStorage


class ImageStorage(FileSystemStorage):
    """给图片重新命名"""

    def __init__(self, location=settings.MEDIA_ROOT, base_url=settings.MEDIA_URL):
        # 初始化
        super(ImageStorage, self).__init__(location, base_url)

    # 重写 _save方法
    def _save(self, name, content):
        # name为上传文件名称

        # 文件扩展名
        ext = os.path.splitext(name)[1]
        # 文件目录
        d = os.path.dirname(name)
        # 定义文件名，年月日时分秒随机数
        fn = time.strftime('%Y%m%d%H%M%S')
        fn = fn + '%d' % random.randint(0, 100)
        # 重写合成文件名
        name = os.path.join(d, fn + ext)
        # 调用父类方法
        return super(ImageStorage, self)._save(name, content)

# # queryset 格式化数据
# def DeleteModelImgUrl(queryset):
#     """删除图片物理路径"""
#     for query in queryset:
#         path = query.image
#         pt = ImageStorage().location
#         print(pt,type(pt),path,type(path))
#         print(os.path.join(ImageStorage().location,path))
#         # 调用 ImageStorage 类的 delete 方法删除
#         ImageStorage().delete(path)

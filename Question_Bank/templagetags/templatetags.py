# 创建时间: 2021/3/24 14:05
from django import template

register = template.Library()

# @register.filter
# def mod(value, arg):
#    if int(value) % int(arg):
#       return True
#    return False

# def add(value, arg):
#     """Add the arg to the value."""
#     try:
#         return int(value) + int(arg)
#     except (ValueError, TypeError):
#         try:
#             return value + arg
#         except Exception:
#             return ''
"""
然后在模板中可以按照如下使用，当然前提是{% load templatehelper %}：
<td>{{ foo.product_amount |div:100 }}</td>
t/qq_33472765/article/details/81174919
"""

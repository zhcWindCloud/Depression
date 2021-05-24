"""
@Time    : 2021/5/13 13:19
@Author  : ZHC
@FileName: forms.py
@Software: PyCharm
"""

from django import forms
from django.forms.widgets import Textarea
from .models import Article
class ArticleAdminForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = '__all__'
        widgets = {
          'content_render': Textarea(attrs={'rows':20, 'cols':120}),
        }
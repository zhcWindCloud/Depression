# 创建时间: 2021/3/15 17:58

from django import forms

from .models import *


class ScoreForm(forms.ModelForm):
    class Meta:
        model = ScorePaper
        fields = ('max_score', 'min_score')

    def clean(self):
        if ScorePaper.min_score > ScorePaper.max_score:
            print("dasdawdawdwadwadwa")
            raise forms.ValidationError('最小值不能超过最大值')
        return self.cleaned_data

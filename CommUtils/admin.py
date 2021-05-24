# Register your models here.

"""
@admin.register(NewUser)
class NewUserAdmin(admin.ModelAdmin):
    list_display = ["headImg", "username", 'Phone', 'gender', 'grade', 'is_active', 'create_time']

    def headImg(self, obj):  # imageField显示方法设置,图片路径设为显示图片
        if obj.HeadImg == "":
            return None
        return format_html('<img src="%s" height="30" />' % obj.HeadImg.url)

    headImg.allow_tags = True
    headImg.short_description = '头像'
    list_display_links = None
    list_editable = ("is_active",)
    list_filter = (ListFilter,)
    search_fields = ("username",)

    def save_model(self, request, obj, form, change):
        #  创建django密码， 第二个参数为None是每次产生的密码都不用，第三个参数为算法， 后面两个参数可以忽略
        GetPsd = request.POST.dict().get("password", None)
        dj_psd = make_password(GetPsd, None, "pbkdf2_sha256")
        if check_password(GetPsd, dj_psd):
            setattr(obj, 'password', dj_psd)
        super(NewUserAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        return False
"""

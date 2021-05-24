$(function () {
    //卸载系统自带post请求
    $('button[data-name^="c_"]').each(function (index, element) {
        console.log(element)
        $(element).prop("onclick", null).off("click")
    })
    //自定义按钮绑定事件
    $('button[data-name^="c_a_"]').click(function () {
        $("#changPassword").trigger("click");
    })
    //根据当前页面路径,判断是否新增试图
    var currentUrl = window.location.href;
    if (currentUrl.indexOf("/app/appbook/") > 0) {
        $.get("/app/echart/", function (data, status) {
            $("#content").append(data);
            //alert("Data: " + data + "\nStatus: " + status);
        })
    } else if (true) {
        console.log("to do")
    }
})

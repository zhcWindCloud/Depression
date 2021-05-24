// 把url参数转成object
getUrl = function (url) {
    url = url || window.location.href
    var search = url.split('/')
    if (!search) return {}
    var search_id = search[5]
    var search_slug = search[6].split('.')[0]
    var result = search_id + '/' + search_slug

    return result
}

//格式化url
// url: http://127.0.0.1:8000/index
// 格式化后  返回 index
FormatUrl = function (url) {
    url = url || window.location.href
    const search = url.split('/')
    if (!search) return {}
    let muen = search[3]
    return muen
}


ArticelFormatUrl = function (url) {
    url = url || window.location.href
    const search = url.split('=')
    if (!search) return {}
    let articel = search[-1]
    return parseInt(articel)
}

//+---------------------------------------------------
//| 比较日期差 dtEnd 格式为日期型或者有效日期格式字符串
//+---------------------------------------------------
GetDateDiff = function (strInterval, dtStart) {
    var dtEnd = new Date();
    switch (strInterval) {
        case 's':
            return parseInt((dtEnd - dtStart) / 1000);
        case 'n':
            return parseInt((dtEnd - dtStart) / 60000);
        case 'h':
            return parseInt((dtEnd - dtStart) / 3600000);
        case 'd':
            return parseInt((dtEnd - dtStart) / 86400000);
        case 'w':
            return parseInt((dtEnd - dtStart) / (86400000 * 7));
        case 'm':
            return (dtEnd.getMonth() + 1) + ((dtEnd.getFullYear() - dtStart.getFullYear()) * 12) - (dtStart.getMonth() + 1);
        case 'y':
            return dtEnd.getFullYear() - dtStart.getFullYear();
    }
}
/*
* 格式化字典取数据
* */
FormatLineData = function (res) {
    var Dict_list = GetDictKey(res)
    var DataDict = {};

    for (var key in res[0]) {
        let Res = res[0][key]
        res[1].forEach(el => {
            Res.forEach(e => {
                if (e.title == el) {
                    var data_dict = {}
                    var new_list = []
                    data_dict["date"] = key
                    data_dict["number"] = e.number
                    new_list.push(data_dict)
                    if (DataDict[e.title]) {
                        DataDict[e.title] = DataDict[e.title].concat(new_list)
                    } else {
                        DataDict[e.title] = new_list
                    }
                }
            })
        })
    }
    for (var key in DataDict) {
        ForGetDate(DataDict[key], res).forEach(dt => {
            let new_dict = {}
            new_dict["date"] = dt
            new_dict["number"] = 0
            DataDict[key].push(new_dict)
        })
    }
    return DataDict
}
/*
* 得到数据
* */
GetChartLineData = function (res) {
    var DataDict = FormatLineData(res)
    let Data_list = []
    for (var key in DataDict) {
        let Data_Dict = {}
        let data_list = []
        Data_Dict["name"] = key
        Data_Dict["type"] = 'line'
        Data_Dict["stack"] = '总量'
        Data_Dict["areaStyle"] = {}
        Data_Dict["emphasis"] = {focus: 'series'}
        DataDict[key].sort(DateSort("date", true)).forEach(da => {
            data_list.push(da.number)
        })
        Data_Dict["data"] = data_list
        Data_list.push(Data_Dict)
    }
    return Data_list
}


/*获取字典的值
* 返回一个键值的 列表
* */
GetDictKey = function (res) {            //显示字典中的键值(key:value)
    let Dict_list = []
    for (var key in res[0]) {
        Dict_list.push(key)
    }
    return Dict_list
}

/*
*查看日期是否完整
* */
ForGetDate = function (Date, res) {
    let date_list = []
    Date.forEach(el => {
        date_list.push(el.date)
    })
    let new_list = []
    GetDictKey(res).forEach(dt => {
        if (date_list.indexOf(dt) == -1) {
            new_list.push(dt)
        }
    })
    return new_list
}

/*
* 按照日期大小排序
*
* */
DateSort = function (property, bol) { //property是你需要排序传入的key,bol为true时是升序，false为降序
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        if (bol) {
            // 升序
            return Date.parse(value1) - Date.parse(value2);
        } else {
            // 降序
            return Date.parse(value2) - Date.parse(value1)
        }

    }
}

/*
*
* 来访记录格式化数据
* */

FormatVisitor = function (res) {
    let Visitor_dict = {}
    let  Smoth_dict ={}
   // Visitor_dict["areaStyle"] = {}
    //Visitor_dict["emphasis"] = {focus: 'series'}
    //平滑曲线
    //Visitor_dict["smooth"] = true
    Visitor_dict["name"] = '访客总量'
    Visitor_dict["type"] = "line"
    Visitor_dict["data"] = res[1]
    Smoth_dict["name"] = '访客总量'
    Smoth_dict["type"] = "bar"
    Smoth_dict["data"] = res[1]

    return [Visitor_dict]
}
document.write("<script language=javascript src='/static/js/Baidu.js'></script>");

var BrowserMatch = {
    init: function () {
        this.browser = this.getBrowser().browser || "未知浏览器"; //获取浏览器名
        this.version = this.getBrowser().version || "未知浏览器版本号"; //获取浏览器版本
        this.OS = this.getOS() + " " + this.getDigits() || "未知操作系统"; //系统版本号

    },
    getOS: function () { //判断所处操作系统
        var sUserAgent = navigator.userAgent.toLowerCase();

        var isWin = (navigator.platform == "Win32") || (navigator.platform == "Win64") || (navigator.platform == "wow64");

        var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform ==
            "Macintosh") || (navigator.platform == "MacIntel");
        if (isMac) return "Mac";
        var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
        if (isUnix) return "Unix";
        var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
        var bIsAndroid = sUserAgent.toLowerCase().match(/android/i) == "android";
        if (isLinux) {
            if (bIsAndroid) return "Android";
            else return "Linux";
        }
        if (isWin) {

            var isWin2K = sUserAgent.indexOf("Windows nt 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
            if (isWin2K) return "Win2000";
            var isWinXP = sUserAgent.indexOf("Windows nt 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1
            sUserAgent.indexOf("Windows XP") > -1;
            if (isWinXP) return "WinXP";
            var isWin2003 = sUserAgent.indexOf("Windows nt 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
            if (isWin2003) return "Win2003";
            var isWinVista = sUserAgent.indexOf("Windows nt 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
            if (isWinVista) return "WinVista";
            var isWin7 = sUserAgent.indexOf("Windows nt 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
            if (isWin7) return "Win7";
            var isWin8 = sUserAgent.indexOf("windows nt 6.2") > -1 || sUserAgent.indexOf("Windows 8") > -1;
            if (isWin8) return "Win8";
            var isWin10 = sUserAgent.indexOf("windows nt 10.0") > -1 || sUserAgent.indexOf("Windows 10") > -1;
            if (isWin10) return "Win10";
        }
        return "其他";
    },
    getDigits: function () { //判断当前操作系统的版本号
        var sUserAgent = navigator.userAgent.toLowerCase();
        var is64 = sUserAgent.indexOf("win64") > -1 || sUserAgent.indexOf("wow64") > -1;
        if (is64) {
            return "64位";
        } else {
            return "32位";
        }
    },
    getBrowser: function () {
        // 获取浏览器名
        var rMsie = /(msie\s|trident\/7)([\w\.]+)/;
        var rTrident = /(trident)\/([\w.]+)/;
        var rEdge = /(edg)\/([\w.]+)/; //IE
        var rFirefox = /(firefox)\/([\w.]+)/; //火狐
        var rOpera = /(opera).+version\/([\w.]+)/; //旧Opera
        var rNewOpera = /(opr)\/(.+)/; //新Opera 基于谷歌
        var rChrome = /(chrome)\/([\w.]+)/; //谷歌
        var rUC = /(chrome)\/([\w.]+)/; //UC
        var rMaxthon = /(chrome)\/([\w.]+)/; //遨游
        var r2345 = /(chrome)\/([\w.]+)/; //2345
        var rQQ = /(qqbrowser)\/([\w.]+)/; //QQ
        var rMetasr = /(metasr)\/([\w.]+)/; //搜狗
        var rSafari = /version\/([\w.]+).*(safari)/;

        var ua = navigator.userAgent.toLowerCase();
        var matchBS, matchBS2;
        matchBS = rMsie.exec(ua);
        console.log(matchBS, matchBS2);
        if (matchBS != null) {
            matchBS2 = rTrident.exec(ua);
            if (matchBS2 != null) {
                switch (matchBS2[2]) {
                    case "4.0":
                        return {
                            browser: "IE",
                            version: "8"
                        };
                        break;
                    case "5.0":
                        return {
                            browser: "IE",
                            version: "9"
                        };
                        break;
                    case "6.0":
                        return {
                            browser: "IE",
                            version: "10"
                        };
                        break;
                    case "7.0":
                        return {
                            browser: "IE",
                            version: "11"
                        };
                        break;
                    default:
                        return {
                            browser: "IE",
                            version: "Undefined"
                        };
                }
            } else {
                return {
                    browser: "IE",
                    version: matchBS[2] || "0"
                };
            }
        }

        matchBS = rFirefox.exec(ua);
        if ((matchBS != null) && (!(window.attachEvent)) && (!(window.chrome)) && (!(window.opera))) {
            return {
                browser: matchBS[1] || "",
                version: matchBS[2] || "0"
            };
        }
        matchBS = rOpera.exec(ua);
        if ((matchBS != null) && (!(window.attachEvent))) {
            return {
                browser: matchBS[1] || "",
                version: matchBS[2] || "0"
            };
        }
        matchBS = rQQ.exec(ua);
        if ((matchBS != null) && (!(window.attachEvent))) {
            return {
                browser: "QQQBrowser",
                version: matchBS[2] || "0"
            };
        }
        matchBS = rEdge.exec(ua);
        if ((matchBS != null) && (!(window.attachEvent))) {
            return {
                browser: "Edge",
                version: matchBS[2] || "0"
            };
        }
        matchBS = rSafari.exec(ua);
        if ((matchBS != null) && (!(window.attachEvent)) && (!(window.chrome)) && (!(window.opera))) {
            return {
                browser: matchBS[2] || "",
                version: matchBS[1] || "0"
            };
        }
        matchBS = rMetasr.exec(ua);
        if ((matchBS != null) && (!(window.attachEvent)) && (!(window.chrome)) && (!(window.opera))) {
            return {
                browser: matchBS[2] || "",
                version: matchBS[1] || "0"
            };
        }
        matchBS = r2345.exec(ua);
        if ((matchBS != null) && (!(window.attachEvent)) && (!(window.chrome)) && (!(window.opera))) {
            return {
                browser: matchBS[2] || "",
                version: matchBS[1] || "0"
            };
        }

        matchBS = rChrome.exec(ua);
        if ((matchBS != null) && (!!(window.chrome)) && (!(window.attachEvent))) {
            matchBS2 = rNewOpera.exec(ua);
            if (matchBS2 == null) {
                return {
                    browser: "Chrome",
                    version: matchBS[2] || "0"
                };
            } else {
                return {
                    browser: "Opera",
                    version: matchBS2[2] || "0"
                };
            }
        }

    }
};
BrowserMatch.init();
// 获取浏览器名:BrowserMatch.browser;
// 获取浏览器版本:BrowserMatch.version;
// 获取所处操作系统:BrowserMatch.OS;


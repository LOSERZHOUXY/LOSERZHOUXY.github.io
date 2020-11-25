(function (window) {
var theUA = window.navigator.userAgent.toLowerCase();
//Navigator 对象包含有关浏览器的信息。
//userAgent 属性是一个只读的字符串，声明了浏览器用于 HTTP 请求的用户代理头的值。
//toLowerCase() 方法用于将大写字符转换为小写。
if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) &&
theUA.match(/trident\s?\d+/)[0])) {
var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
//match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
if (ieVersion <= 9) {
			
            var str = "你的浏览器版本太低了\n已经和时代脱轨了 :(<br>请前往升级";
            var str2 = "推荐使用:<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:#f00;font-weight: bold;'>谷歌</a>,"
            + "<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E7%81%AB%E7%8B%90%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:#f00;font-weight: bold;'>火狐</a>,"
            + "<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E7%8C%8E%E8%B1%B9%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:#f00;font-weight: bold;'>猎豹</a>,其他双核急速模式";
            document.writeln("<pre style='text-align:center;color:#fff;height:100%;border:0;position:fixed;top:0;left:0;width:100%;z-index:1234;background-color: #1CA889;'>" + 
            "<h2 style='padding-top:200px;margin:0'><strong>" + str + "<br/></strong></h2><p>" + 
            str2 + "</p></pre>");
            document.execCommand("Stop");
} else {
//执行某些操作
return true
}
}

})(window);
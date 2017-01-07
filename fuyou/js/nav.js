$(function(){
    //nav js
    var t = 180;
    $(".nav-all>li").mouseenter(function(t){
        $(this).find("ul").stop(false,true).slideDown(t);
    }).mouseleave(function(t){
        $(this).find("ul").stop(false,true).slideUp(t);
    });
    
//banner图
    //click num>span 标签切换
    $('.num span').click(function(){
        $(this).attr("class","cur").siblings('span').attr("class","normal");
        index = parseInt($(this).text(),10)-1;
        $('.banner-pic>a').eq(index).css({"display":"block","visibility":"visible"}).siblings('a').css({"display":"none","visibility":"hidden"})
    })
    //自动切换
    var index = 0;//当前显示图片的索引
    var autochange = function (){
        var length = $(".banner-pic>a").length;
        index + 1 === length ? index = 0 : index += 1;
        $('.banner-pic').find('a').eq(index).css({"display":"block","visibility":"visible"}).siblings('a').css({"display":"none","visibility":"hidden"})
        //数字，因为是右浮动，计算要用length-1-index
        $('.num>span').eq(length-1-index).attr("class","cur").siblings('span').attr("class","normal");
    }
    var set = setInterval(autochange,3000);
    $('.banner-pic').on("mouseover",function(){
        clearInterval(set);
    }).on("mouseout",function(){
        set = setInterval(autochange,3000);
    })
//banner图
//小轮播图
    var xindex = 0, autoChange = function(){
        var l = $('.smallFocus>a').length;
        xindex + 1 === l ? xindex = 0 : xindex += 1;
        $('.smallFocus>a').eq(xindex).css({
            "display":"block","visibility":"visible"
            }).siblings('a').css({
            "display" : "none",
            "visibility" : "hidden"
        })
        $('.digit>span').eq(l-1-xindex).attr("class","current").siblings('span').attr("class","norml");
    },st = setInterval(autoChange,2000);
    $('.smallFocus').on("mouseover",function(){
        clearInterval(st)
    }).on("mouseout",function(){
        st = setInterval(autoChange,2000);
    })
//小轮播图
//标签切换
    $('.digit>span').on("click",function(){
        $(this).attr("class","current").siblings('span').attr("class","norml");
        xindex = parseInt($(this).text(),10)-1;
        $('.smallFocus>a').eq(xindex).css({
            "display" : "block",
            "visibility" : "visible"
        }).siblings('a').css({
            "display" : "none",
            "visibility" : "hidden"
        })
    })
//标签切换
})
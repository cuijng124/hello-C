$(function () {
    //头部闪烁按钮
    var shan=$(".shan");
    setInterval(function () {
        shan.fadeToggle('linear')
    },20);


    //排行榜
    var headBox=$(".headBox");
    var topHidden=$(".topHidden");
    headBox.click(function () {
        if($("body").hasClass("on")){
            $("body").removeClass("on");
            $("body").animate({marginTop:0},300,'linear');
        }else {
            $("body").addClass("on");
            $("body").animate({marginTop:'650px'},300,'linear');
        }
    });
    //排行榜关闭按钮
    var closeBox=$(".closeBox");
    closeBox.hover(function () {
        $(".close0").animate({top:0},200);
        $(".close1").animate({top:"100%"},200);
    },function () {
        $(".close0").animate({top:"-100%"},200);
        $(".close1").animate({top:0},200);
    });
    closeBox.click(function () {
        $("body").removeClass("on");
        $("body").animate({marginTop:0},300,'linear');
    });

    var navList=$(".tabNav li");
    var tabConList=$(".tabConList");
    navList.click(function () {
        tabConList.hide();
        navList.removeClass('active');
        var index=navList.index($(this));
        $(this).addClass('active');
        $(tabConList.get(index)).show();
    });


    //机器人导航
    var nav=$(".nav_box");
    var navW=nav.width();
    nav.css({height:navW});
    var navHover=$(".nav_hover");
    var navImg=$(".nav > img");
    var navLists=$(".navLists");
    navLists.hover(function () {
        $(this).addClass("navListsHover");
    },function () {
        $(this).removeClass("navListsHover");
    });
    navImg.hover(function () {
        navLists.addClass("navListsHover");
    },function () {
        navLists.removeClass("navListsHover");

    });

    //返回顶部按钮
    var up=$(".up");
    var windowH=$(window).height();
    $(window).scroll(function () {
        if($(window).scrollTop()>=windowH){
            up.fadeIn();
        }else{
            up.fadeOut();
        }
    });
    up.click(function () {
        $('body,html').animate({scrollTop: 0 }, 300);
    });


    //三角形
    var triangle1=$(".triangles li:first-child").position().top;
    var triangle2=$(".triangles li:nth-child(2)").position().top;
    var triangle3=$(".triangles li:nth-child(3)").position().top;
    var triangle4=$(".triangles li:nth-child(4)").position().top;
    var triangle5=$(".triangles li:nth-child(5)").position().top;
    var triangle6=$(".triangles li:nth-child(6)").position().top;
    var triangle7=$(".triangles li:nth-child(7)").position().top;
    var triangle8=$(".triangles li:nth-child(8)").position().top;
    var triangle9=$(".triangles li:nth-child(9)").position().top;
    var p=0;
    var t=0;
    $(document).scroll(function () {
        p=$(this).scrollTop();
        if(p/4<=triangle1){
            $(".triangles li:first-child").css({top:triangle1-p/4});
        }else{
            $(".triangles li:first-child").css({top:p/3});
        }
        if(p/5<=triangle2){
            $(".triangles li:nth-child(2)").css({top:triangle2});
        }else{
            $(".triangles li:nth-child(2)").css({top:p/6});
        }
        if(p/4<=triangle3){
            $(".triangles li:nth-child(3)").css({top:triangle3});
        }else{
            $(".triangles li:nth-child(3)").css({top:p/4});
        }
        if(p/4<=triangle4){
            $(".triangles li:nth-child(4)").css({top:triangle4});
        }else{
            $(".triangles li:nth-child(4)").css({top:p/4});
        }
        if(p/6<=triangle5){
            $(".triangles li:nth-child(5)").css({top:triangle5});
        }else{
            $(".triangles li:nth-child(5)").css({top:p/6});
        }
        if(p/6<=triangle6){
            $(".triangles li:nth-child(6)").css({top:triangle6-p/6});
        }else{
            $(".triangles li:nth-child(6)").css({top:p/6});
        }
        if(p/2<=triangle7){
            $(".triangles li:nth-child(7)").css({top:triangle7-p/2});
        }else{
            $(".triangles li:nth-child(7)").css({top:p/2});
        }
        if(p/1.5<=triangle8){
            $(".triangles li:nth-child(8)").css({top:triangle8-p/1.5});
        }else{
            $(".triangles li:nth-child(8)").css({top:p/1.5});
        }
        if(p/1.2<=triangle9){
            $(".triangles li:nth-child(9)").css({top:triangle9-p/1.2});
        }else{
            $(".triangles li:nth-child(9)").css({top:p/1.2});
        }
    })
});
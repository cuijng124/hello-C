(function($){
    $.fn.floatAd = function(options){
        var defaults = {
            imgSrc : "images/floating_img.jpg",
            url : "index.html",
            openStyle : 1,
            speed : 10
        };
        var options = $.extend(defaults,options);
        var _target = options.openStyle == 1 ?  "target='_blank'" : '' ;
        var html = "<div id='float_ad' class='floating_con' style='position:absolute;z-index:1000000;cleat:both;'>";
        html += "  <a href='" + options.imgJumpToUrl + "' " + _target + "><img src='" + options.imgSrc + "' class='float_ad_img'/></a>";
        html += "</div>";
        $('body').append(html);
        function init(){
            var x = 0,y = 0;
            var xin = true, yin = true;
            var step = 1;
            var delay = 10;
            var obj=$("#float_ad");
            obj.find('img.float_ad_img').load(function(){
                var float = function(){
                    var L = 1374;
                    var T = 191;
                    var OW = obj.width();
                    var OH = obj.height();
                    var DW = $(document).width();
                    var DH = $(document).height();
                    x = x + step *( xin ? 1 : -1 );
                    if (x < L) {
                        xin = true; x = L
                    }
                    if (x > DW-OW-1){
                        xin = false; x = DW-OW-1
                    }
                    y = y + step * ( yin ? 1 : -1 );
                    if (y > DH-OH-1) {
                        yin = false; y = DH-OH-1 ;
                    }
                    if (y < T) {
                        yin = true; y = T
                    }
                    var left = x ;
                    var top = y;
                    obj.css({'top':top,'left':left});
                };
                var itl = setInterval(float,options.speed);
                $('#float_ad').mouseover(function(){clearInterval(itl)});
                $('#float_ad').mouseout(function(){itl=setInterval(float, options.speed)} )
            });
        }
        init();
    };
})(jQuery);




/*(function($){
    $.fn.floatAd1 = function(options){
        var defaults = {
            imgSrc : "images/floating_img.jpg",
            url : "index.html",
            openStyle : 1,
            speed : 20
        };
        var options = $.extend(defaults,options);
        var _target = options.openStyle == 1 ?  "target='_blank'" : '' ;
        var html = "<div id='float_ad1' class='floating_con' style='position:absolute;z-index:1000000;cleat:both;'>";
        html += "  <a href='" + options.imgJumpToUrl + "' " + _target + "><img src='" + options.imgSrc + "' border='0' class='float_ad_img'/></a>";
        html += "</div>";
        $('body').append(html);
        function init(){
            var x = 0,y = 0;
            var xin = true, yin = true;
            var step = 1;
            var delay = 10;
            var obj=$("#float_ad1");
            obj.find('img.float_ad_img').load(function(){
                var float = function(){
                    var L = 275;
                    var T = 540;
                    var OW = obj.width();
                    var OH = obj.height();
                    var DW = $(document).width();
                    var DH = $(document).height();
                    x = x + step *( xin ? 1 : -1 );
                    if (x < L) {
                        xin = true; x = L
                    }
                    if (x > DW-OW-1){
                        xin = false; x = DW-OW-1
                    }
                    y = y + step * ( yin ? 1 : -1 );
                    if (y > DH-OH-1) {

                        yin = false; y = DH-OH-1 ;
                    }
                    if (y < T) {
                        yin = true; y = T
                    }
                    var left = x ;
                    var top = y;
                    obj.css({'top':top,'left':left});
                };
                var itl = setInterval(float,options.speed);
                $('#float_ad1').mouseover(function(){clearInterval(itl)});
                $('#float_ad1').mouseout(function(){itl=setInterval(float, options.speed)} )
            });
        }
        init();
    };
})(jQuery);


(function($){
    $.fn.floatAd2 = function(options){
        var defaults = {
            imgSrc : "images/floating_img.jpg", //漂浮图片路径
            url : "http://www.cic.cn", //图片点击跳转页
            openStyle : 1, //跳转页打开方式 1为新页面打开  0为当前页打开
            speed : 20 //漂浮速度 单位毫秒
        };
        var options = $.extend(defaults,options);
        var _target = options.openStyle == 1 ?  "target='_blank'" : '' ;
        var html = "<div id='float_ad2' class='floating_con' style='position:absolute;z-index:1000000;cleat:both;'>";
        html += "  <a href='" + options.imgJumpToUrl + "' " + _target + "><img src='" + options.imgSrc + "' border='0' class='float_ad_img'/></a>";
        html += "</div>";
        $('body').append(html);
        function init(){
            var x = 0,y = 0;
            var xin = true, yin = true;
            var step = 1;
            var delay = 10;
            var obj=$("#float_ad2");
            obj.find('img.float_ad_img').load(function(){
                var float = function(){
                    var L = 1255;
                    var T = 540;
                    var OW = obj.width();//当前广告的宽
                    var OH = obj.height();//高
                    var DW = $(document).width(); //浏览器窗口的宽
                    var DH = $(document).height();

                    x = x + step *( xin ? 1 : -1 );
                    if (x < L) {
                        xin = true; x = L
                    }
                    if (x > DW-OW-1){//-1为了ie
                        xin = false; x = DW-OW-1
                    }

                    y = y + step * ( yin ? 1 : -1 );
                    if (y > DH-OH-1) {

                        yin = false; y = DH-OH-1 ;
                    }
                    if (y < T) {
                        yin = true; y = T
                    }

                    var left = x ;
                    var top = y;

                    obj.css({'top':top,'left':left});
                };
                var itl = setInterval(float,options.speed);
                $('#float_ad2').mouseover(function(){clearInterval(itl)});
                $('#float_ad2').mouseout(function(){itl=setInterval(float, options.speed)} )
            });
            // 点击关闭
            /*$('#close_float_ad').on('click',function(){
             $('#float_ad').hide();
             });*/
        /*}
        init();
    }; //floatAd
})(jQuery);*/
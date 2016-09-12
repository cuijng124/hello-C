$(function () {
    var nav=$(".briefNav");
    var navW=nav.width();
    var navL=nav.position().left;
    nav.css({height:navW,top:navL});
    nav.hover(function () {
        $(".briefNav .list:nth-child(2)").css({transform:'scale(1,1) rotate(35deg)','-moz-transform':'scale(1,1) rotate(35deg)','-webkit-transform':'scale(1,1) rotate(35deg)',left:'74%',top:'-65%'});
        $(".briefNav .list:nth-child(3)").css({transform:'scale(1,1) rotate(-58deg)','-moz-transform':'scale(1,1) rotate(-58deg)','-webkit-transform':'scale(1,1) rotate(-58deg)',left:'-53%',top:'-36%'});
        $(".briefNav .list:nth-child(4)").css({transform:'scale(1,1) rotate(162deg)','-moz-transform':'scale(1,1) rotate(162deg)','-webkit-transform':'scale(1,1) rotate(162deg)',left:'55%',top:'96%'});
    },function () {
        $(".briefNav .list:nth-child(2)").css({transform:'scale(0,0) rotate(35deg)','-moz-transform':'scale(0,0) rotate(35deg)','-webkit-transform':'scale(0,0) rotate(35deg)',left:'25%',top:0});
        $(".briefNav .list:nth-child(3)").css({transform:'scale(0,0) rotate(-58deg)','-moz-transform':'scale(0,0) rotate(-58deg)','-webkit-transform':'scale(0,0) rotate(-58deg)',left:'25%',top:0});
        $(".briefNav .list:nth-child(4)").css({transform:'scale(0,0) rotate(162deg)','-moz-transform':'scale(0,0) rotate(162deg)','-webkit-transform':'scale(0,0) rotate(162deg)',left:'25%',top:0});
    });



    //陨石
    /*var stone1=$(".stone1");
    var speed=5;
    var nw=stone1.width();
    var nh=stone1.height();
    var bw=$(document).width();
    var bh=$(document).height();
    var maxTop=bh+nh;
    var minLeft=-nw;

    stone1.css({left:GetRandomNum(20,100)+"%",top:-nh});

    var flag=true;
    var x = parseInt(stone1.position().left);
    var y = parseInt(stone1.position().top);
    function init() {
        if(x > minLeft && y < maxTop){
            flag=true
        }
        if(x < minLeft || y > maxTop){
            flag=false
        }
        if(flag){
            x = x - speed;
            y = y + speed;
        } else {
            stone1.remove();
        }
        stone1.css({left:x,top:y})
    }
    var t=setInterval(init,10);
    */

    ys($(".stone1"));

    
    $("body").click(function () {
        var arr=['img/ys1.png','img/ys2.png','img/ys3.png','img/ys4.png'];
        var index = Math.floor(Math.random() * arr.length);
        console.log(index);
        $(".stones").append('<img class="stone1" src="img/brief/ys'+index+'.png">');
        ys($(".stone1"));
    })
});


function ys(obj) {
    var speed=5;
    var nw=obj.width();
    var nh=obj.height();
    var bh=$(document).height();
    var maxTop=bh+nh;
    var minLeft=-nw;

    obj.css({left:GetRandomNum(20,100)+"%",top:-nh});

    var flag=true;
    var x = parseInt(obj.position().left);
    var y = parseInt(obj.position().top);
    function init() {
        if(x > minLeft && y < maxTop){
            flag=true
        }
        if(x < minLeft || y > maxTop){
            flag=false
        }
        if(flag){
            x = x - speed;
            y = y + speed;
        } else {
            obj.remove();
        }
        obj.css({left:x,top:y})
    }
    var t=setInterval(init,10);
}


function GetRandomNum(Min,Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}
function piao(obj){
    var speed=1;
    var nw=obj.width(); //圆的宽
    var nh=obj.height();
    var bw=$(document).width();//屏幕的宽
    var bh=$(document).height();
    var maxTop = bh-nh;//圆的最大top值
    var minTop = 0;//圆的最小top值
    var minLeft = 0;
    var maxLeft =bw-nw;
    var flag = true;
    var yFlag = true;
    var x = parseInt(obj.position().left);//圆的left值
    var y = parseInt(obj.position().top);

    function init(){
        if(y >= maxTop){
            yFlag = false;
        }
        if(y <= minTop){
            yFlag = true;
        }
        if(x >= maxLeft){
            flag = false;
        }
        if(x <= minLeft){
            flag = true;
        }
        if (flag) {
            x = x + speed;
        } else {
            x = x - speed;
        }
        if (yFlag) {
            y = y + speed;
        } else {
            y = y - speed;
        }
        obj.css({left:x,top:y});
    }
    var t1=setInterval(init,20);
    obj.hover(function () {
        clearInterval(t1);
    }, function () {
        t1=setInterval(init,20);
    })
}

$(function () {
    piao($(".nav_list1"));
    piao($(".nav_list2"));
    piao($(".nav_list3"));
});
/**
 * Created by Administrator on 2017/4/6 0006.
 */
$(document).ready(function(){
    $("#b1").click(function(){
        $("#p1").hide(1000);
    });
    $("#b2").click(function(){
        $("#p1").show(1000);
    });
    $("#b3").click(function(){
        $("#p1").toggle(10000);  //类似于音乐播放的开始暂停
    });
})
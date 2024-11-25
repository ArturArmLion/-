$(function(){
    var tagP =$('.intro-text').hide(5000);
    $('.intro-text').show(3000); 
});


$(document).ready(function(){
    var cont_left = $(".information-card").position().left;
    $("img").hover(function(){
        $(this).parent().parent().css("z-index", 1);
        $(this).animate({
            height:"150",
            width:"150",
            left:"-=37",
            top:"-=37"
        },"fast");},
        function(){
            //отдаление
        $(this).parent().parent().css("z-index", 0);
        $(this).animate({
            height:"75",
            width:"75",
            left:"+=37",
            top:"+=37"         
        },"fast");});
    $("img").each(function(index){
        var left = (index *160) + cont_left;
        $(this).css("left", left+"px");
    });
});


$(document).ready(function(){
    $("h1").on({
        mouseover:function(){
            $(this).css("color", "green")
        },
        mouseleave:function(){
            $(this).css("color", "black");
        }
    });
});
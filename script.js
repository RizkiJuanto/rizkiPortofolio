$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    
    $('.btn-menu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.btn-menu i').toggleClass("active");
    })
});
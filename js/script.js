$(function(){
    $("#navbarToggle").on("blur",function(event){
        let screenWidth = window.innerWidth;
        if(screenWidth < 768){
            $("#collapsable-nav").collapse('hide');
        }
    })
})
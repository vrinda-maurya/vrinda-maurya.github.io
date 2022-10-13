$(document).ready(function(){
    $("#toggle-btn").click(function(){
        
        $("body").toggleClass("change-background");
        $(this).css("border","2px solid #f5f5f5")
        $("span").text(
            $("span").text()=="Light Mode"?"Dark Mode":"Light Mode")
        $(".container").slideUp(1000);
        $(".container").slideDown(1000);
        
       
    })
})
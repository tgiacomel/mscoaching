/**
 * Created by Thibaut on 16/07/2015.
 */
$(document).ready(function(){
    $("nav#menu ul > li > a").click(function(event){
        event.preventDefault();
        $("nav#menu ul > li.active").removeClass("active");
        var target = $(this);
        target.parent().addClass("active");
        scrollTo(target.attr("href"));

    });
});

function scrollTo(id){
    $('html, body').animate({
        scrollTop:$(id).offset().top -= 100
    }, 2000);
}
$("button").click(function () {
    $("h1").slideUp().animate({opacity: 0.5}).slideDown();
});

$(document).keypress(function (event){
    $("h1").text(event.key);
})

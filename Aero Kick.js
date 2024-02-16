function goBack() {
    window.history.back();
}

$(document).ready(function(){
    $('#carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
    });

    // Show carousel and hide default gallery
    $('#carousel').show();
    $('#gallery').hide();
});
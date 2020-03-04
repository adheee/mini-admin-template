// navbar scroll
$(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("#navbar-top").addClass("navbar-scroll").removeClass("navbar navbar-expand-lg navbar-orange bg-hitam");
    } else {
        $("#navbar-top").removeClass("navbar-scroll").addClass("navbar navbar-expand-lg navbar-orange bg-hitam");
    }
});
// end navbar scroll
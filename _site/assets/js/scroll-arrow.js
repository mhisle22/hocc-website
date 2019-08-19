

$(document).on('click', '#scroll-icon', function (event) {
    console.log("ran");
    $('html, body').animate({
        scrollTop: 600
      }, { // scroll at certain speed based on distance to anchor link
        duration: Math.abs(window.scrollY - 600 * 0.65),
        easing: "swing"
      });
});
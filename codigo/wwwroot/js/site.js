var didScroll
var lastScrollTop = 0
const navbarHeight = $('header').outerHeight()

$(window).on("scroll", function () {
    didScroll = true
})

$(document).on('ready', function () {
    hasScrolled()
})

setInterval(function () {
    if (didScroll) {
        hasScrolled()
        didScroll = false
    }
}, 250)

function hasScrolled() {
    let st = $(this).scrollTop()

    if (Math.abs(lastScrollTop - st) <= 5)
        return

    if (st > lastScrollTop && st > navbarHeight)
        $('.main-header').removeClass('nav-up').addClass('nav-down')
    else
        if (st < navbarHeight)
            $('.main-header').removeClass('nav-down').addClass('nav-up')

    lastScrollTop = st
}
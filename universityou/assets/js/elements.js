$(function () {
    $sidebar = $('#sidebar')
    $window = $(window)
    $window.on('scroll', _.throttle(function () {
        $sidebar.css('top', Math.max(0, 60 - $window.scrollTop()));
    }, 10));
});
$("#returnTop").click(function () {
    var speed=200;
    $('body').animate({ scrollTop: 0 }, speed);
    return false;
});
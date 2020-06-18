$(document).ready(function () {

    $('.btn-up').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    $(function () {
        $('a[href="#scroll"').click(function (event) {
            event.preventDefault()
            var el = $('.block-scroll');
            $('body,html').animate({
                scrollTop: $(el).offset().top
            }, 1000);
        });
    });
});
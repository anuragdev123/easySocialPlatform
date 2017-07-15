easySocial.controller('landingController', function ($scope) {
    console.log('landing controller');
    angular.element( document.querySelector( 'body')).removeClass();
        angular.element( document.querySelector( 'body')).removeAttr('style');
    $(document).ready(function () {
        
        $(function () {
            $(".typewrite").typed({
                strings: ["upgrading your social experience.", "intrigating social sites"],
                typeSpeed: 0,
                backDelay: 500,
                callback: function () {
                    $(this)
                }
            });
        });
        $(window).scroll(function () {
            var sticky = $('body'),
                    scroll = $(window).scrollTop();
            if (scroll >= 100)
                sticky.addClass('body-scrolled');
            else
                sticky.removeClass('body-scrolled');
        });
    });

});
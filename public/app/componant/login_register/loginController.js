easySocial.controller('loginController', function ($scope) {
    console.log('login Controller');
    angular.element(document.querySelector('body')).removeClass();
    angular.element(document.querySelector('body')).removeAttr('style');
    $(document).ready(function () {
        angular.element(document.querySelector('body')).removeAttr()
        angular.element(document.querySelector('body')).addClass('mh-fullscreen bg-img center-vh p-20');
        var el = angular.element('#divId');
        angular.element('body').attr('style', 'background-image:url(assets/img/bg-girl.jpg)');
    });
});
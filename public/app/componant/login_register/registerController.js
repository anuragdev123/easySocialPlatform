easySocial.controller('registerController', function ($scope,loginRegisterService) {
    console.log('register Controller');
    angular.element(document.querySelector('body')).removeClass();
    angular.element(document.querySelector('body')).removeAttr('style');
    $(document).ready(function () {
        angular.element(document.querySelector('body')).removeAttr()
        angular.element(document.querySelector('body')).addClass('mh-fullscreen bg-img center-vh p-20');
        var el = angular.element('#divId');
        angular.element('body').attr('style', 'background-image:url(assets/img/bg-girl.jpg)');
    });
    //controller function and model
    $scope.register={
        info:{},
        registerFn:registerFn
    };
    function registerFn(data){
        console.log(data);
         loginRegisterService.registerUser(data).then(function (response) {
                    if (response.status == '200') {
                      
                      console.log(response)
                    }
                });
    }
    
});
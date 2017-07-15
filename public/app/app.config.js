'use strict';
angular.module('easySocial')
        .config(['$stateProvider','$urlRouterProvider',  function ($stateProvider,$urlRouterProvider) {
               console.log("config")
                        $stateProvider
                        .state('home', {
                            url: '/',
                            templateUrl: '../app/componant/landing/landing.html',
                            controller: 'landingController'
                        }).state('login',{
                            url: '/login',
                              templateUrl: '../app/componant/login_register/login.html',
                              controller:'loginController'
                        }).state('register',{
                            url: '/register',
                              templateUrl: '../app/componant/login_register/register.html',
                              controller:'registerController'
                        }) ;
                               
                $urlRouterProvider.when('', '/');
//                $urlRouterProvider.otherwise('/404');
//                $locationProvider.html5Mode(true);
            }]);



'use strict';
angular.module('easySocial')
        .config(['$stateProvider','$urlRouterProvider',  function ($stateProvider,$urlRouterProvider) {
               console.log("config")
                        $stateProvider
                        .state('home', {
                            url: '/',
                            templateUrl: '../app/componant/landing/landing.html',
                            controller: 'landingController'
                            
                        });
                $urlRouterProvider.when('', '/');
//                $urlRouterProvider.otherwise('/404');
//                $locationProvider.html5Mode(true);
            }]);



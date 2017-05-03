var app = angular.module('app', ['ui.router', 'ngCookies', 'ui.bootstrap', 'base64']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('welcome', {
            url: '/',
            templateUrl: '/views/tpl/welcome.html',
            controller: 'WelcomeCtrl',
            params: {
                args: {}
            }
        })
        .state('signup', {
            url: '/signup',
            templateUrl: '/views/tpl/signup.html',
            controller: 'SignupCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/views/tpl/login.html',
            controller: 'LoginCtrl',
            params: {
                args: {}
            }
        })
        .state('allUsers', {
            url: '/allUsers',
            templateUrl: '/views/tpl/userList.html',
            controller: 'UserCtrl'
        });

    $locationProvider.html5Mode(true);
});
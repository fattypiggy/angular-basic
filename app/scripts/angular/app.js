var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/tpl/welcome.html', 
            controller: 'WelcomeCtrl'
        })
        .when('/signup',{
            templateUrl: '/views/tpl/signup.html', 
            controller: 'SignupCtrl'
        })
        .when('/login',{
            templateUrl: '/views/tpl/login.html', 
            controller: 'LoginCtrl'
        })
        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);
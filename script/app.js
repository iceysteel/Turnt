/**
 * Created by MuhammadRizky on 11/8/2014.
 */

angular.module('app', ['ngRoute','app.account','app.host','app.parties'])
/**
 * config
 */
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'homeController'
            })
            .when('/login',{
                templateUrl:'partials/login.html',
                controller:'loginController'
            })
            .when('/register',{
                templateUrl:'partials/register.html',
                controller:'registerController'
            })
    }])

/**
 * factories
 */
    .factory('homeFactory', ['$http', function ($http) {

    }])

/**
 * controllers
 */
    .controller('homeController', ['$scope', 'homeFactory', function ($scope, homeFactory) {

    }]);
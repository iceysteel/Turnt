/**
 * Created by MuhammadRizky on 11/8/2014.
 */

angular.module('app', ['ngRoute'])
/**
 * config
 */
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'homeController'
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
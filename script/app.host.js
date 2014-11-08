/**
 * Created by MuhammadRizky on 11/8/2014.
 */

angular.module('app.host', [])
/**
 * config
 */
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/host',{
                templateUrl: 'partials/host.html',
                controller: 'hostController'
            })
    }])

/**
 * factories
 */
    .factory('hostFactory', ['$http', function ($http) {

    }])

/**
 * controllers
 */
    .controller('hostController', ['$scope', 'hostFactory', function ($scope, hostFactory) {

    }]);
/**
 * Created by MuhammadRizky on 11/8/2014.
 */

angular.module('app.account', [])
/**
 * config
 */
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/account',{
                templateUrl: 'partials/account.html',
                controller: 'accountController'
            })
    }])

/**
 * factories
 */
    .factory('accountFactory', ['$http', function ($http) {

    }])

/**
 * controllers
 */
    .controller('accountController', ['$scope', 'accountFactory', function ($scope, accountFactory) {

    }]);
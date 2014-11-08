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
            .when('/login',{
                templateUrl:'partials/login.html',
                controller:'loginController'
            })
            .when('/register',{
                templateUrl:'partials/register.html',
                controller:'registerController'
            })
            .when('/host',{
                templateUrl: 'partials/host.html',
                controller: 'hostController'
            })
            .when('/account',{
                templateUrl: 'partials/account.html',
                controller: 'accountController'
            })
            .when('/parties', {
                templateUrl: 'partials/parties.html',
                controller: 'partiesController'
            })
            .otherwise({redirectTo:'/'})
    }])

/**
 * factories
 */
    .factory('homeFactory', ['$http', function ($http) {

    }])

    .factory('hostFactory', ['$http', function ($http) {

    }])
    .factory('accountFactory', ['$http', function ($http) {

    }])
    .factory('partyFactory', ['$http', function ($http) {
        return {
            getParties: function () {
                return $http.get('json/parties.json').then(function (response) {
                    if (response.data.error) {
                        return null;
                    }

                    return response.data;
                })
            }
        };
    }])

/**
 * controllers
 */
    .controller('homeController', ['$scope', 'homeFactory', function ($scope, homeFactory) {

    }])
    .controller('hostController', ['$scope', 'hostFactory', function ($scope, hostFactory) {

    }])
    .controller('accountController', ['$scope', 'accountFactory', function ($scope, accountFactory) {

    }])
    .controller('partyController', ['$scope', 'partyFactory', function ($scope, partyFactory) {
        $scope.parties = [];
        partyFactory.getParties().then(function (data) {
            angular.copy(data, $scope.parties);
        });
    }])
;
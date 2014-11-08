/**
 * Created by MuhammadRizky on 11/8/2014.
 */

angular.module('app.parties', [])
/**
 * config
 */
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/parties', {
                templateUrl: 'partials/parties.html',
                controller: 'partiesController'
            })
    }])

/**
 * factories
 */
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
    .controller('partyController', ['$scope', 'partyFactory', function ($scope, partyFactory) {
        $scope.parties = [];
        partyFactory.getParties().then(function (data) {
            angular.copy(data, $scope.parties);
        });
    }]);
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
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'loginController'
            })
            .when('/register', {
                templateUrl: 'partials/register.html',
                controller: 'registerController'
            })
            .when('/host', {
                templateUrl: 'partials/host.html',
                controller: 'hostController'
            })
            .when('/account', {
                templateUrl: 'partials/account.html',
                controller: 'accountController'
            })
            .when('/partyList', {
                templateUrl: 'partials/partyList.html',
                controller: 'partyListController'
            })
            .otherwise({redirectTo: '/'})
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
    .factory('partyListFactory', ['$http', function ($http) {
        // call parse and look for the invited parties -R

        // return an array of parties object -R
    }])
    .factory('partyDetailFactory', ['$http', function ($http) {
        // call parse and look for the specific parties -R

        // return the party object
    }])
    .factory('loginFactory', ['$http', function ($http) {

    }])
    .factory('registerFactory', ['$http', function ($http) {

    }])

/**
 * controllers
 */
    .controller('homeController', ['$scope', 'homeFactory', function ($scope, homeFactory) {

    }])
    .controller('hostController', ['$scope', 'hostFactory', '$location', function ($scope, hostFactory, $location) {
        Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");

        var currentUser = Parse.User.current();
        if (currentUser) {

        }
        else {
            $location.path('/login');
        }

        $scope.hostEvent = function () {
            var Event = Parse.Object.extend("Parties");
            var party = new Event();
            var user = Parse.User.current();
            user.fetch().then(function (fetchedUser) {
                var name = fetchedUser.getUsername();
            }, function (error) {
                //Handle the error
            });

            party.set("Location", $scope.loc);
            party.set("Year", $scope.yr);
            party.set("Month", $scope.mo);
            party.set("Day", $scope.day);
            party.set("Cost", $scope.co);
            party.set("Owner", name);
            party.save(null, {
                success: function (party) {
                    // Execute any logic that should take place after the object is saved.
                    alert('New object created with objectId: ' + party.id);
                },
                error: function (party, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    alert('Failed to create new object, with error code: ' + error.message);
                }
            });
        }
    }])
    .controller('accountController', ['$scope', 'accountFactory', function ($scope, accountFactory) {
        Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");
        var currentUser = Parse.User.current();
        $scope.username =  currentUser.getUsername();
        $scope.email = currentUser.getEmail();

        $scope.listFriends = function(){
            // will be developed,when we got friend list array
            document.getElementById("friendList").innerHTML = 'friend A </br> friend B </br>';
            // call the factories and get a list of parties available from friends
        };

        $scope.searchForFriends = function ()
        {
            if (friendName == $scope.username) {
                $scope.results = "cannot add yourself";
            }
            else{
                var User = Parse.Object.extend("User");
                var query = new Parse.Query(User);
                query.equalTo('username', friendName);

                query.find({
                    success: function(results) {
                        // Do something with the returned Parse.Object values
                        if (results.length > 0){
                            for (var i = 0; i < results.length; i++) {
                                var object = results[i];
                                username = object.get('username');
                                // i'm not sure how to polish this this line below. -R
                                $scope.results = (username + '<a class="inp" onClick="addFriend(\'' + username + '\')">Add</a>');
                            }
                        }
                        else{
                            $scope.results = "no users found";
                        }
                    },
                    error: function(error) {
                        // Execute any logic that should take place if the save fails.
                        // error is a Parse.Error with an error code and message.
                        alert("Error: " + error.code + " " + error.message);
                    }
                });
            }
        };

        $scope.addFriend = function(username){
            // still error, returns nothing -M
            var user = Parse.User.current();
            var relation = user.relation("Friends");
            alert('added ' + username);
        };

        $scope.removeFriend = function (username){
            // still error, return nothing -M
            alert('removed ' + username);
        };
    }])
    .controller('partyListController', ['$scope', 'partyListFactory', function ($scope, partyListFactory) {
        $scope.parties = [];

        $scope.getPatyList = function () {
            // call the factory and get the party list -R

            // show the party list using ng repeat -R

            // current test code
            Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");
            var pty = Parse.Object.extend("Parties");
            var query = new Parse.Query(pty);
            query.get("rlF4ESEDL7", {
                success: function(pty) {
                    alert(pty);
                    $scope.partyData=pty.get("Cost");
                },
                error: function(pty, error) {
                    alert("ERROR");
                }
            });
        };
    }])
    .controller('loginController', ['$scope', 'loginFactory', '$location', function ($scope, loginFactory, $location) {
        $scope.signIn = function () {
            Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");
            var user = new Parse.User();
            Parse.User.logIn($scope.uname, $scope.password, {
                success: function (user) {
                    $location.path('/home');
                },
                error: function (user, error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        }
    }])
    .controller('registerController', ['$scope', 'registerFactory', '$location', function ($scope, registerFactory, $location) {
        $scope.register = function () {
            Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");
            var user = new Parse.User();
            user.set("username", $scope.uname);
            user.set("password", $scope.password);
            user.set("email", scope.email);

            // other fields can be set just like with Parse.Object
            user.signUp(null, {
                success: function (user) {
                    $location.path('/home')
                },
                error: function (user, error) {
                    // Show the error message somewhere and let the user try again.
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        }
    }])
;

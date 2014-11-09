/**
 * Created by MuhammadRizky on 11/8/2014.
 */

var tempVar;

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
            .when('/partyDetails', {
                templateUrl: 'partials/partyDetails.html',
                controller: 'partyDetailsController'
            })
            .otherwise({redirectTo: '/'})
    }])

/**
 * factories
 */
    .factory('homeFactory', ['$http', function ($http) {
        // for future devs.
    }])

    .factory('hostFactory', ['$http', function ($http) {
        // for future devs.
    }])
    .factory('accountFactory', ['$http', function ($http) {

    }])
    .factory('partyListFactory', ['$http', function ($http) {
        // call parse and look for the invited parties -R

        // return an array of parties object -R
    }])
    .factory('partyDetailsFactory', ['$http', function ($http) {
        // call parse and look for the specific parties -R

        // return the party object
    }])
    .factory('loginFactory', ['$http', function ($http) {
        // for future devs.
    }])
    .factory('registerFactory', ['$http', function ($http) {
        // for future devs.
    }])

/**
 * controllers
 */
    .controller('homeController', ['$scope', 'homeFactory', function ($scope, homeFactory) {

    }])
    .controller('hostController', ['$scope', 'hostFactory', '$location', function ($scope, hostFactory, $location) {
        $scope.hostEvent = function () {
            var Event = Parse.Object.extend("Parties");
            var party = new Event();
            var user = Parse.User.current();
            var name = user.getUsername();

            party.set("Location", $scope.loc);
            party.set("Year", Number($scope.yr));
            party.set("Month", Number($scope.mo));
            party.set("Day", Number($scope.day));
            party.set("Cost", Number($scope.co));
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
        };

        $scope.isNumber = function (evt)
        {
            return (event.charCode >= 48 && event.charCode <= 57);
        };

        Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");

        var currentUser = Parse.User.current();
        if (currentUser) {

        }
        else {
            $location.path('/login');
        }
    }])
    .controller('accountController', ['$scope', 'accountFactory', function ($scope, accountFactory) {
        Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");
        var currentUser = Parse.User.current();
        $scope.username =  currentUser.getUsername();
        $scope.email = currentUser.getEmail();

        $scope.listFriends = function(){
            // will be developed,when we got friend list array
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
            var user = Parse.User.current();
            var friends = user.get('FriendUsers');
            if (! friends){
                friends = [friend];
            }
            else {
                friends.push(friend);
            }
            user.save(null, {
                success: function(user) {
                    user.set("FriendUsers", friends);
                    user.save();
                }
            });
            //alert('added ' + friend.get('username'));
        };

        $scope.removeFriend = function (username){
            // still error, return nothing -M
            alert('removed ' + username);
        };
    }])
    .controller('partyListController', ['$scope', 'partyListFactory', '$location', '$routeParams', function ($scope, partyListFactory, $location, $routeParams) {
        $scope.parties = [];

        Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");
        var currentUser = Parse.User.current();
        var username = currentUser.getUsername();
        var Event = Parse.Object.extend("Parties");
        var query = new Parse.Query(Event);
        query.equalTo('Owner', username);
        query.find({
            success: function(results)
            {
                angular.copy(results, $scope.parties);
            },
            error: function(error)
            {

            }
        });

        $scope.goToDetails = function (party) {
            tempVar = party;
            $location.url('/partyDetails');
        };

        $scope.getParty = function (partyId){
            Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");
            var pty = Parse.Object.extend("Parties");
            var query = new Parse.Query(pty);
            query.get(partyId, {
                success: function(pty) {
                    console.log(pty);
                    return(pty);

                },
                error: function(pty, error) {
                    alert("ERROR");
                }
            });

        };


        $scope.getArray = function getArray(){
            Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");

            //get party object

            //get array and push party object into array

            var currentUser = Parse.User.current();
            if(currentUser.get("PartyArray") == null){
                var prtyArray = [];
            }


            prtyArray.push("rlF4ESEDL7");

            currentUser.set("PartyArray", prtyArray);

            //save array

            currentUser.save(null, {
                success: function(currentUser) {
                    // Now let's update it with some new data. In this case, only cheatMode and score
                    // will get sent to the cloud. playerName hasn't changed.
                    //currentUser.set("PartyArray", prtyArray);
                    currentUser.save();
                }
            });


        }
    }])
    .controller('loginController', ['$scope', 'loginFactory', '$location', '$routeParams', function ($scope, loginFactory, $location, $routeParams) {
        $scope.signIn = function () {
            Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");
            var user = new Parse.User();
            Parse.User.logIn($scope.uname, $scope.password, {
                success: function (user) {
                    $location.url('/partyList');
                },
                error: function (user, error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        };
    }])
    .controller('registerController', ['$scope', 'registerFactory', '$location', '$routeParams', function ($scope, registerFactory, $location, $routeParams) {
        $scope.register = function () {
            Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");
            var user = new Parse.User();
            user.set("username", $scope.userName);
            user.set("password", $scope.userPass);
            user.set("email", $scope.userEmail);

            user.signUp(null, {
                success: function (user) {
                    alert("Successful!");
                    $location.url('/partyList');
                },
                error: function (user, error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        };
    }])
    .controller('partyDetailsController', ['$scope', 'partyDetailsFactory', function ($scope, partyDetailsFactory) {
        $scope.party = tempVar;

        $scope.pledge = function () {

        }
    }])
;
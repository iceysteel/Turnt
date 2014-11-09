function Register()
        {
            Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");
            var user = new Parse.User();
            user.set("username", document.getElementById('uname').value);
            user.set("password", document.getElementById('password').value);
            user.set("email", document.getElementById('email').value);
             
            // other fields can be set just like with Parse.Object
            user.signUp(null, {
              success: function(user) {
                window.location = "#partyList";
              },
              error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
              }
            });
        }
		
function signIn()
        {
            Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");
            var user = new Parse.User();
            Parse.User.logIn(document.getElementById('uname').value, document.getElementById('password').value, {
              success: function(user) {
              },
              error: function(user, error) {
                alert("Error: " + error.code + " " + error.message);
              }
            });
        }
		
function newEvent()
        {
            var Event = Parse.Object.extend("Parties");
            var party = new Event();
            var user = Parse.User.current()
			var name = user.getUsername();
            party.set("Location", document.getElementById('loc').value);
            party.set("Year", Number(document.getElementById('yr').value));
            party.set("Month", document.getElementById('mo').value);
            party.set("Day", Number(document.getElementById('day').value));
            party.set("Cost",  Number(document.getElementById('co').value));
            party.set("Owner", name);
            party.save(null, {
              success: function(party) {
                // Execute any logic that should take place after the object is saved.
                alert('New object created with objectId: ' + party.id);
              },
              error: function(party, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
              }
            });
        }
        Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");
        var currentUser = Parse.User.current();
        if (currentUser) 
        {
            
        } 
        else 
        {
            window.location = "login.html";
        }
		
		function isNumberKey(evt)
        {
          return (event.charCode >= 48 && event.charCode <= 57);
		}
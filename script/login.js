/**
 * Created by MuhammadRizky on 11/8/2014.
 */
function SignIn()
{
    Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");
    var user = new Parse.User();
    Parse.User.logIn(document.getElementById('uname').value, document.getElementById('password').value, {
        success: function(user) {
            window.location = "home.html";
        },
        error: function(user, error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}
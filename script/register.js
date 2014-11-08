/**
 * Created by MuhammadRizky on 11/8/2014.
 */
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
            window.location = "home.html";
        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });
}
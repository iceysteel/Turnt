/**
 * Created by MuhammadRizky on 11/8/2014.
 */

function newEvent()
{
    var Event = Parse.Object.extend("Parties");
    var party = new Event();
    var user = Parse.User.current();
    user.fetch().then(function(fetchedUser){
        var name = fetchedUser.getUsername();
    }, function(error){
        //Handle the error
    });

    party.set("Location", document.getElementById('loc').value);
    party.set("Year", Number(document.getElementById('yr').value));
    party.set("Month", document.getElementById('mo').value);
    party.set("Day", Number(document.getElementById('da').value));
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
function addaFriend()
{
    var currentUser = Parse.User.current();
    var friendname = document.getElementById('friend').value;
    var friends = currentUser.get('FriendUsers');
    if (!friends)
    {
        var friends = [];
    }
    
    var query = new Parse.Query(Parse.User);
    query.equalTo("username", friendname);
    query.find(
    {
        success: function(objs)
        {
            objs.forEach(function(results) 
            {
                alert(results.id);
                friends.push(results.id);
                currentUser.set('FriendUsers', friends);
                
                currentUser.save(null,
                {
                    success: function(testObject)
                    {
                        alert("SUCCESS");
                    },
                    error: function(testObject, error)
                    {
                    
                    }
                });
            });
            
        },
        error: function(error)
        {
            alert("TEST");
        }
    });
}
function logout()
{
    Parse.User.logOut();
    window.location = "#login"
}
Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", "v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");
var currentUser = Parse.User.current();
if (currentUser) {
    // do stuff with the user
} else {
    window.location = "#login"
}

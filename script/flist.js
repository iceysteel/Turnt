
var friends = "";
var friendlist = currentUser.get('FriendUsers');

friendlist.forEach(function(userid)
{
    var query = new Parse.Query(Parse.User);
    query.equalTo("objectId", userid);
    query.find(
    {
        success: function(objs)
        {
        
            objs.forEach(function(results) 
            {
                document.getElementById('fs').innerHTML += results.get('username') + "<br>";
            });
        },
        error: function(testObject, error)
        {
        
        }
    });
});

var currentUser = Parse.User.current();
var friends = currentUser.get('FriendUsers');
if (!friends)
{
    var friends = [];
}

friends.forEach(function(friend)
{
    var query = new Parse.Query(Parse.User);
    query.equalTo("objectId", friend);
    query.find(
    {
        success: function(objs)
        {
            objs.forEach(function(uname) 
            {
                alert(uname.get('username'));
                var Party = Parse.Object.extend("Parties");
                var query2 = new Parse.Query(Party);
                query2.equalTo("Owner", uname.get('username'));
                query2.find(
                {
                    success: function(ptys)
                    {
                        ptys.forEach(function(pty)
                        {
                            document.getElementById("friendParty").innerHTML += "<div class=\"inp\"><a>Owner: " + pty.get('Owner') + "<br>" + "Location: " + pty.get('Location') + "<br>" + "Date: " + pty.get('Month') + " " + pty.get('Day') + ", " + pty.get('Year') + "<br>" + "Pledge: " + pty.get('Cost') + "</a></div>" + "<a class='inp' ng-click='goToDetails(party)'>Details</a>";
                            //document.getElementById("friendParty").innerHTML += "Location: " + pty.get('Location') + "<br>";
                            //document.getElementById("friendParty").innerHTML += "Date: " + pty.get('Month') + " " + pty.get('Day') + ", " + pty.get('Year') + "<br>";
                            //document.getElementById("friendParty").innerHTML += "Pledge: " + pty.get('Cost') + "</a></div>";

                        });
                    },
                    error: function(ptys, error) 
                    {
                        
                    }
                });
            });
        },
        error: function(objs, error) 
        {
            
        }
    });
});


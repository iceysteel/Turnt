Parse.initialize("jvpZoE593I9616TtmoVX9qMzs9DYXVlfa6rudZ6P", 
"v1ySlxINSYW6OL1aKo7YZV7i4SjvG4D7Th2fhhWU");

var currentUser = Parse.User.current();
var username = currentUser.getUsername();

var Event = Parse.Object.extend("Parties");
var query = new Parse.Query(Event);
query.equalTo('Owner', username);

query.find({
    success: function(results)
    {
        var htmlst = "";
        results.forEach(function(entry)
        {
            htmlst += "<div class = block><div class = 'owner'>"+entry.get('Owner')+"</div>";
            htmlst += "<div class = 'date'>" + entry.get('Month') + " " + entry.get('Day') + " ," + entry.get('Year') + "</div></div>";
        });
        //document.getElementById('mypane').innerHTML = htmlst;
    },
    error: function(error)
    {
        alert("TEST");
    }
});

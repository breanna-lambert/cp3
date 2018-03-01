
$(document).ready(function() {         //$ = go find the document  //ready = when ready is triggered, do this
  var submitButton = $("jokeButton");
  console.log(submitButton);
  var currentPunchline = "";

  $("#jokeButton").click(function(e) {     //function(e) doesn't have a name - anonymous function
    e.preventDefault();

    var myurl= "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";
    //var myurl= "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten";
    $.ajax({
      url : myurl,
      dataType : "json",
      success : function(json) {
        removeButton();

        document.getElementById('jokeButton').value = "Get a new joke";

        console.log(json);

        var results = "";
        results = "<p class='joke'>" + json.setup + "</p>";
        
        currentPunchline = json.punchline;

        addButton(currentPunchline);

        $("#jokeResult").html(results);
      }
    });
  });
});

function addButton(currentPunchline){
  document.getElementById('punchline').innerHTML = '<input type="button" value="Show Punchline"></input>';

  document.getElementById("punchline").addEventListener('click',function ()
    {
      document.getElementById('punchline').innerHTML = '<p class="punchline">' + currentPunchline + '</p>';
    }  ); 
}

function removeButton(pl){
  document.getElementById('punchline').innerHTML = '';
}
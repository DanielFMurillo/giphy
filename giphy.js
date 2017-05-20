$(document).ready(function(){
	console.log("ready")}
  );

// create an array of topics
var movies = ["The Hangover","Step Brothers", "Dumb and Dumber", "White Chicks", "Superbad", "21 Jump Street"];
	for (i = 0; i < movies.length; i++){
		    var buttons =	$("<button>")
        var buttonsDiv = $("#buttonsDiv");
        buttons.text(movies[i]);
        buttonsDiv.append(buttons);
        buttons.attr("data-movie", movies[i]);
        buttons.attr("data-state", "still");
        buttons.attr("data-state", "animate");
};

//event delegation
$("#buttonsDiv").on("click", "button", function() {
		var movie = $(this).attr("data-movie");
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC";		
		// console.log(this);

//clear the divs before the ajax call
$("#gifs").empty(); 
		
$.ajax({
        url: queryURL,
        method: "GET"
      })
		.done(function(response) {
      console.log(queryURL);
      console.log(response);
      		var results = response.data;
      		// console.log(response);
      		for (var i = 0; i < results.length; i++) {
      			var gifDiv = $("<div class='item'>");
      			var rating = results[i].rating;
           	var p = $("<p>").text("Rating: " + rating);
           	var image = $("<img>");
           		image.attr("src", results[i].images.original_still.url);
              image.attr("data-still", results[i].images.original_still.url);
              image.attr("data-animate", results[i].images.fixed_height.url);
           		gifDiv.prepend(p);
           		gifDiv.prepend(image);
           		$("#gifs").prepend(gifDiv);
      		}
      	});
      }); 
//creating an add button
$("#add").on("click", function() {
    var input = $("#input").val();
    var buttons = $("<button>")
        buttons.text(input);
        $("#buttonsDiv").append(buttons);
        buttons.attr("data-movie", input);
        buttons.attr("data-state", "still");
        buttons.attr("data-state", "animate");
});

//animate gifs when clicking on them. event delegation
$("#gifs").on("click", "img" ,function(){
        var state = $(this).attr("data-state");
        console.log($(this));
        if(state === "still"){
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
       } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
   }
});


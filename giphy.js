$(document).ready(function(){
	console.log("ready")}
  );

// create an array of topics
var movies = ["The Hangover","Step Brothers", "Dumb and Dumber", "White Chicks", "Superbad", "21 Jump Street"];

	for ( i = 0; i < movies.length; i++){
		    var buttons =	$("<button>");


// 	}



$("button").on("click", function() {
		var movie = $(this).attr("movie-title");
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC";		
		// console.log(this);
		
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
           		gifDiv.prepend(p);
           		gifDiv.prepend(image);

           		$("#gifs").prepend(gifDiv);
      		}

      	});

      }); 

// $("#item").on("click",function(){

  
// }

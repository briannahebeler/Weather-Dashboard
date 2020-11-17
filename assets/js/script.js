$(document).ready(function () {

    $("#search-button").on("click", function () {
        var searchValue = $("#search-value").val();

        $("search-value").val("");

        searchWeather(searchValue);
    })



    function searchWeather(searchValue) {
        $.ajax({
            type: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=12df42066c8edfdebc68ad11abbf183e&units=imperial`,
            dataType: "json",
        }).then(function(data) {
            console.log(data);
            //create history link for the search (Look up .push())
            //this is used to set items to local storage- is done in function of first call

            $("#today").empty();

            //creating a card for appending weather data
            var title = $("<h3>").addClass("card-title").text(data.name);
            var card = $("<div>").addClass("card");
            var temp = $("<p>").addClass("card-text").text("Temp: " + data.main.temp);
            var wind = $("<p>").addClass("card-text").text("Wind: " + data.wind.speed);
            var humid = $("<p>").addClass("card-text").text(`Humidity: ${data.main.humidity}`);
            var cardBody = $("<div>").addClass("card-body");

            cardBody.append(title, temp, wind, humid);
            card.append(cardBody);
            $("#today").append(card);

        });

    }

    //function to get forecast- diff url

    //use a for loop to loop over all forcasts (by specs)

    // function to get uv index (this is another dif url call)
    //this uv index even though diff call. append to same sepcs from search body card


    //get current search history, if there is any 

    //print out search history 
    //hind- needs to clickable bc you are going to pass search value into it


})
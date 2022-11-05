// DOM elements variable declarations
citynameEL = document.querySelector('#cityName');
submitbtnEl = document.querySelector('#submitBtn');

// variable declaration for my open weather API key
var openweatherAPIKey = "86428bd2b8af57a99daa14d368265a5f";

/**
 * function declaration 
 */
function getApi() {
    var cityName = citynameEL.value;
    console.log('City Name', cityName);

    var onedayrequestURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + openweatherAPIKey;

    console.log('Request URL', onedayrequestURL);

    fetch(onedayrequestURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log('Data', data);
            console.log('Data', data.main.temp);
            // need a moment command to convert number to actual date
            console.log('Lat', data.coord.lat);
            console.log('Lon', data.coord.lon);

            // make sure to pay attention to when object and array to get actual value 
            var iconcode = data.weather[0].icon;
            var iconurimgEl = `http://openweathermap.org/img/w/${iconcode}.png`;


            var lon = data.coord.lon;
            var lat = data.coord.lat;

            var fivedaysrequestURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openweatherAPIKey}`;

            fetch(fivedaysrequestURL)
            .then(function (response) {
            return response.json();
            })
            .then(function (data) {
                console.log('Data', data);
    
    
    
          
        });

      
    });


};



// click event listener when the city name is submitted and function call to getApi
submitbtnEl.addEventListener('click', getApi);

// DOM elements variable declarations
inputCitynameEl = document.querySelector('#inputCityName');
submitbtnEl = document.querySelector('#submitBtn');
spanCityNameEl = document.querySelector('#spanCityName');
imgTempIconEl = document.querySelector('#imgTempIcon');


// variable declaration for my open weather API key
var openweatherAPIKey = "86428bd2b8af57a99daa14d368265a5f";

/**
 * function declaration 
 */
function getApi() {
    // variable declaration for the entered city name
    var cityName = inputCitynameEl.value;
    console.log('City Name', cityName);

    // modify the text/attributes for the city entered to be displayed
    spanCityNameEl.textContent = cityName;


    var onedayrequestURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openweatherAPIKey}`;

    // console.log('Request URL', onedayrequestURL);

    fetch(onedayrequestURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            // console.log('Data', data);
            // console.log('Temp Kelvin', data.main.temp);
            // fiveDayForeDay1.textContent = "Temp: " + Math.floor((data.list[0].main.temp - 273.15) * 1.8 + 32) + "°F";
            
            // need a moment command to convert number to actual date
            // console.log('Lat', data.coord.lat);
            // console.log('Lon', data.coord.lon);

            // make sure to pay attention to when object and array to get actual value 
            var currentDayIconCode = data.weather[0].icon;
            // console.log("Current Day Icon Code", currentDayIconCode)
            var currentDayIconPage = `http://openweathermap.org/img/w/${currentDayIconCode}.png`;
            // console.log("Icon", currentDayIconPage);
            imgTempIconEl.setAttribute("src", currentDayIconPage);
            imgTempIconEl.setAttribute("alt", "Weather Icon");

            var lon = data.coord.lon;
            var lat = data.coord.lat;

            var fivedaysrequestURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openweatherAPIKey}`;

            fetch(fivedaysrequestURL)
                .then(function (response) {
                return response.json();
                })
                .then(function (data) {
                    // console.log('Second fetch Data', data);
        }); 
    });
};

// click event listener when the city name is submitted and function call to getApi
submitbtnEl.addEventListener('click', getApi);

// DOM elements variable declarations
inputCityNameEl = document.querySelector('#inputCityName');
submitBtnEl = document.querySelector('#submitBtn');
spanCityNameEl = document.querySelector('#spanCityName');
imgTempIconEl = document.querySelector('#imgTempIcon');


// variable declarations 
var openWeatherAPIKey = "86428bd2b8af57a99daa14d368265a5f"; // for open weather API key
var cityNameSubmitted = ""; // for user submitted city name
var spanCityName = ""; // for city name to be displayed
var currenDayTemp = ""; // for current day temp






/**
 * function declaration for API calls to get data and modiy attributes of the DOM element variables
 */
function getApi() {

    cityNameSubmitted = inputCityNameEl.value;
    // console.log('City Name', cityName);

    // varibale declaration for URL to get current day weather data
    var onedayRequestURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityNameSubmitted}&appid=${openWeatherAPIKey}`;
    // console.log('Request URL', onedayrequestURL);

    // fetch request to get data from API for current day weather condition 
    fetch(onedayRequestURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            // console.log('Data', data);
            // console.log('City Name', data.name);
            // console.log('Temp in K', data.main.temp);
            // console.log('Wind', data.wind.speed);
            // console.log('Humidity', data.main.humidity);

            // variables assigments from API data 
            spanCityName = data.name;



            // modify the text/attributes for the city entered to be displayed
            spanCityNameEl.textContent = spanCityName;

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

            var fivedaysRequestURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherAPIKey}`;

            // fetch request to get data from API for the next 5 days using lon and lat data from previous fecth call 
            fetch(fivedaysRequestURL)
                .then(function (response) {
                return response.json();
                })
                .then(function (data) {
                // console.log('Second fetch Data', data);
        }); 
    });
};

// click event listener when the city name is submitted and function call to getApi
submitBtnEl.addEventListener('click', getApi);

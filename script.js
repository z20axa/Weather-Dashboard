// DOM elements variable declarations
inputCityNameEl = document.querySelector('#inputCityName');
submitBtnEl = document.querySelector('#submitBtn');
spanCityNameEl = document.querySelector('#spanCityName');
// need date element
spanCurrentDayImgTempIconEl = document.querySelector('#spanCurrentDayImgTempIcon');
spanCurrentDayTempEl = document.querySelector('#spanCurrentDayTemp');
spanCurrentDayWindEl = document.querySelector('#spanCurrentDayWind');
spanCurrentDayHumidityEl = document.querySelector('#spanCurrentDayHumidity');

// variable declarations 
var openWeatherAPIKey = "86428bd2b8af57a99daa14d368265a5f"; // for open weather API key
var cityNameSubmitted = ""; // for user submitted city name
var currentDayRequestURL = ""; // for URL to get current day weather data
var spanCityName = ""; // for city name to be displayed
// need data variable
var currentDayIconCode = ""; // for current day icon code data
var currentDayIconPage = ""; // for current day icon code page data
var currentDayTemp = ""; // for current day temp data
var currentDayWind = "" // for current day wind data
var currentDayHumidity = "" // for current day humidity data
var lon = ""; // for city sybmitted lon data
var lat = ""; // for city sybmitted lat data

/**
 * function declaration for API calls to get data and modiy attributes of the DOM element variables
 */
function getApi() {
    // variable assigment 
    cityNameSubmitted = inputCityNameEl.value;
    // console.log('City Name', cityName);

    // variable assigment 
    currentDayRequestURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityNameSubmitted}&appid=${openWeatherAPIKey}`;
    // console.log('Request URL', onedayrequestURL);

    // fetch request to get data from API for current day weather condition 
    fetch(onedayRequestURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            // console.log('Data', data);
            // console.log('Temp in K', data.main.temp);
            // console.log('Wind', data.wind.speed);
            // console.log('Humidity', data.main.humidity);

            // variables assigments from API data received 
            spanCityName = data.name;
            currentDayIconCode = data.weather[0].icon;
            currentDayIconPage = `http://openweathermap.org/img/w/${currentDayIconCode}.png`;
            currentDayTemp = Math.floor((data.main.temp - 273.15) * 1.8 + 32);
            currentDayWind = data.wind.speed;
            currentDayHumidity = data.main.humidity; 
            lon = data.coord.lon;
            lat = data.coord.lat;


            // DOM elements modification of the text/attributes for display
            spanCityNameEl.textContent = spanCityName;
            spanCurrentDayImgTempIconEl.setAttribute("src", currentDayIconPage);
            spanCurrentDayImgTempIconEl.setAttribute("alt", "Weather Icon");
            spanCurrentDayTempEl.textContent = currentDayTemp;
            spanCurrentDayWindEl.textContent = currentDayWind;
            spanCurrentDayHumidityEl.textContent = currentDayHumidity;


            // fiveDayForeDay1.textContent = "Temp: " + Math.floor((data.list[0].main.temp - 273.15) * 1.8 + 32) + "°F";
            
            // need a moment command to convert number to actual date
   
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

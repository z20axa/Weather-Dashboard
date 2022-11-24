// DOM elements variable declarations
var inputCityNameEl = document.querySelector('#inputCityName');
var submitBtnEl = document.querySelector('#submitBtn');
var cityNameEl = document.querySelector('#cityName');
var currentDayDateEl = document.querySelector('#currentDayDate');
var currentDayImgTempIconEl = document.querySelector('#currentDayImgTempIcon');
var currentDayTempEl = document.querySelector('#currentDayTemp');
var currentDayWindEl = document.querySelector('#currentDayWind');
var currentDayHumidityEl = document.querySelector('#currentDayHumidity');
var nextDay1DateEl = document.querySelector('#nextDay1Date');
var nextDay1ImgTempIconEl = document.querySelector('#nextDay1ImgTempIcon');
var nextDay1TempEl = document.querySelector('#nextDay1Temp');
var nextDay1WindEl = document.querySelector('#nextDay1Wind');
var nextDay1HumidityEl = document.querySelector('#nextDay1Humidity');
var nextDay2DateEl = document.querySelector('#nextDay2Date');
var nextDay2ImgTempIconEl = document.querySelector('#nextDay2ImgTempIcon');
var nextDay2TempEl = document.querySelector('#nextDay2Temp');
var nextDay2WindEl = document.querySelector('#nextDay2Wind');
var nextDay2HumidityEl = document.querySelector('#nextDay2Humidity');
var nextDay3DateEl = document.querySelector('#nextDay3Date');
var nextDay3ImgTempIconEl = document.querySelector('#nextDay3ImgTempIcon');
var nextDay3TempEl = document.querySelector('#nextDay3Temp');
var nextDay3WindEl = document.querySelector('#nextDay3Wind');
var nextDay3HumidityEl = document.querySelector('#nextDay3Humidity');
var nextDay4DateEl = document.querySelector('#nextDay4Date');
var nextDay4ImgTempIconEl = document.querySelector('#nextDay4ImgTempIcon');
var nextDay4TempEl = document.querySelector('#nextDay4Temp');
var nextDay4WindEl = document.querySelector('#nextDay4Wind');
var nextDay4HumidityEl = document.querySelector('#nextDay4Humidity');
var nextDay5DateEl = document.querySelector('#nextDay5Date');
var nextDay5ImgTempIconEl = document.querySelector('#nextDay5ImgTempIcon');
var nextDay5TempEl = document.querySelector('#nextDay5Temp');
var nextDay5WindEl = document.querySelector('#nextDay5Wind');
var nextDay5HumidityEl = document.querySelector('#nextDay5Humidity');
var citySearchHistoryEl = document.querySelector('#citySearchHistory');

// variable declarations 
var openWeatherAPIKey = "86428bd2b8af57a99daa14d368265a5f"; // for open weather API key
var cityNameSubmitted = ""; // for user submitted city name
var currentDayRequestURL = ""; // for URL to get the current day weather forecast data
var nextFivedaysRequestURL = ""; // for URL to get the next 5-days weather forecast data
var cityName = ""; // for city name to be displayed
var currentDayDate = ""; // for current day date
var currentDayIconCode = ""; // for current day forecast icon code data
var currentDayIconPage = ""; // for current day forecast icon code page data
var currentDayTemp = ""; // for current day forecast temp data
var currentDayWind = "" // for current day forecast wind data
var currentDayHumidity = "" // for current day forecast humidity data
var lon = ""; // for city submitted lon data
var lat = ""; // for city submitted lat data
var nextDay1Date = ""; // for next day1 forecast full date info
var nextDay1DateYear = ""; // for next day1 forecast year date
var nextDay1DateMonth = ""; // for next day1 forecast month date
var nextDay1DateDay = ""; // for next day1 forecast day date
var nextDay1IconCode = ""; // for next day1 forecast icon code data
var nextDay1IconPage = ""; // for next day1 forecast icon code page data
var nextDay1Temp = ""; // for next day1 forecast temp data
var nextDay1Wind = ""; // for next day1 forecast wind data
var nextDay1Humidity = ""; // for next day1 forecast humidity data
var nextDay2Date = ""; // for next day2 forecast full date info
var nextDay2DateYear = ""; // for next day2 forecast year date
var nextDay2DateMonth = ""; // for next day2 forecast month date
var nextDay2DateDay = ""; // for next day2 forecast day date
var nextDay2IconCode = ""; // for next day2 forecast icon code data
var nextDay2IconPage = ""; // for next day2 forecast icon code page data
var nextDay2Temp = ""; // for next day2 forecast temp data
var nextDay2Wind = ""; // for next day2 forecast wind data
var nextDay2Humidity = ""; // for next day2 forecast humidity data
var nextDay3Date = ""; // for next day3 forecast full date info
var nextDay3DateYear = ""; // for next day3 forecast year date
var nextDay3DateMonth = ""; // for next day3 forecast month date
var nextDay3DateDay = ""; // for next day3 forecast day date
var nextDay3IconCode = ""; // for next day3 forecast icon code data
var nextDay3IconPage = ""; // for next day3 forecast icon code page data
var nextDay3Temp = ""; // for next day3 forecast temp data
var nextDay3Wind = ""; // for next day3 forecast wind data
var nextDay3Humidity = ""; // for next day3 forecast humidity data
var nextDay4Date = ""; // for next day4 forecast full date info
var nextDay4DateYear = ""; // for next day4 forecast year date
var nextDay4DateMonth = ""; // for next day4 forecast month date
var nextDay4DateDay = ""; // for next day4 forecast day date
var nextDay4IconCode = ""; // for next day4 forecast icon code data
var nextDay4IconPage = ""; // for next day4 forecast icon code page data
var nextDay4Temp = ""; // for next day4 forecast temp data
var nextDay4Wind = ""; // for next day4 forecast wind data
var nextDay4Humidity = ""; // for next day4 forecast humidity data
var nextDay5Date = ""; // for next day5 forecast full date info
var nextDay5DateYear = ""; // for next day5 forecast year date
var nextDay5DateMonth = ""; // for next day5 forecast month date
var nextDay5DateDay = ""; // for next day5 forecast day date
var nextDay5IconCode = ""; // for next day5 forecast icon code data
var nextDay5IconPage = ""; // for next day5 forecast icon code page data
var nextDay5Temp = ""; // for next day5 forecast temp data
var nextDay5Wind = ""; // for next day5 forecast wind data
var nextDay5Humidity = ""; // for next day5 forecast humidity data

/**
 * function declaration to display the page inital city weather forecast without any user submitted city input
 */
function displayInitialPageCityWeatherForecast() {
    // variable assigments
    cityNameSubmitted = "Philadelphia";
    currentDayRequestURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameSubmitted}&appid=${openWeatherAPIKey}`;

    // fucntion call to get current day API request and DOM elements modification of the text/attributes for display
    getAPICurrentDayWeatherForecast (currentDayRequestURL);
};

/**
 * function declaration to display the weather forecast for the user submitted city
 */
function displaySubmittedCityWeatherForecast() {
    // variable assigments
    cityNameSubmitted = inputCityNameEl.value;
    currentDayRequestURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameSubmitted}&appid=${openWeatherAPIKey}`;

    // creates button element for submitted city 
    searchedCityBtnEl = document.createElement("button");
    // add class attribute to the buttom element created
    searchedCityBtnEl.classList.add('citySearchHistoryBtn');
    // element variable assigment 
    searchedCityBtnEl.innerHTML = cityNameSubmitted;
    // append button element created for display
    citySearchHistoryEl.append(searchedCityBtnEl);

    // fucntion call to get current day API request and DOM elements modification of the text/attributes for display
    getAPICurrentDayWeatherForecast (currentDayRequestURL);
};


/**
 * function declaration to display the weather forecast for already submitted/searched city histories
 */
function displayCitySearchedHistoryWeatherForecast(event) {
    // variable declaration
    var child = event.target; 

    // variable assigment
    searchedCityClicked = child.innerText;

    currentDayRequestURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCityClicked}&appid=${openWeatherAPIKey}`;

    // fucntion call to get current day API request and DOM elements modification of the text/attributes for display
    getAPICurrentDayWeatherForecast (currentDayRequestURL);
};

/**
 * function declaration to get API request for current day weather forecast & DOM elements current day modification of the text/attributes for display
 */
function getAPICurrentDayWeatherForecast (currentDayRequestURL){
    // fetch request to get data from API for current day weather condition 
    fetch(currentDayRequestURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            // variables assigments from API data received 
            cityName = data.name;
            currentDayIconCode = data.weather[0].icon;
            currentDayIconPage = `https://openweathermap.org/img/w/${currentDayIconCode}.png`;
            currentDayTemp = Math.floor((data.main.temp - 273.15) * 1.8 + 32);
            currentDayWind = data.wind.speed;
            currentDayHumidity = data.main.humidity; 
            lon = data.coord.lon;
            lat = data.coord.lat;

            // variable assigments and declarations for current date data
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            currentDayDate = `${month}/${day}/${year}`;

            // DOM elements current day modification of the text/attributes for display
            cityNameEl.textContent = cityName;
            currentDayDateEl.textContent = currentDayDate;
            currentDayImgTempIconEl.setAttribute("src", currentDayIconPage);
            currentDayImgTempIconEl.setAttribute("alt", "Weather Icon");
            currentDayTempEl.textContent = currentDayTemp;
            currentDayWindEl.textContent = currentDayWind;
            currentDayHumidityEl.textContent = currentDayHumidity;
              
            // variable assigment for next five day requet URL
            nextFivedaysRequestURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherAPIKey}`;

            // function call to get next five days API request and DOM elements modification of the text/attributes for display
            getAPInextFiveDaysWeatherForecast (nextFivedaysRequestURL);
        });
};

/**
 * function declaration to get API request for next five days weather forecast & DOM elements current day modification of the text/attributes for display
 */
function getAPInextFiveDaysWeatherForecast (nextFivedaysRequestURL){
    // fetch request to get data from API for the next five days weather forecast using lon and lat data from previous fecth call 
    fetch(nextFivedaysRequestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        // next day1 forecast variables assigments from API data received 
        nextDay1IconCode = data.list[0].weather[0].icon;
        nextDay1IconPage = `https://openweathermap.org/img/w/${nextDay1IconCode}.png`;
        nextDay1Temp = Math.floor((data.list[0].main.temp - 273.15) * 1.8 + 32);
        nextDay1Wind = data.list[0].wind.speed;
        nextDay1Humidity = data.list[0].main.humidity;
        nextDay1Date = data.list[0].dt_txt;
        nextDay1DateYear = nextDay1Date.slice(0,4);
        nextDay1DateMonth = nextDay1Date.slice(5,7);
        nextDay1DateDay = nextDay1Date.slice(8,10);

        // next day1 DOM elements modification of the text/attributes for display
        nextDay1DateEl.textContent = `${nextDay1DateMonth}/${nextDay1DateDay}/${nextDay1DateYear}`;
        nextDay1ImgTempIconEl.setAttribute("src", nextDay1IconPage);
        nextDay1ImgTempIconEl.setAttribute("alt", "Weather Icon");
        nextDay1TempEl.textContent = nextDay1Temp;
        nextDay1WindEl.textContent = nextDay1Wind;
        nextDay1HumidityEl.textContent = nextDay1Humidity;

        // next day2 forecast variables assigments from API data received 
        nextDay2IconCode = data.list[8].weather[0].icon;
        nextDay2IconPage = `https://openweathermap.org/img/w/${nextDay2IconCode}.png`;
        nextDay2Temp = Math.floor((data.list[8].main.temp - 273.15) * 1.8 + 32);
        nextDay2Wind = data.list[8].wind.speed;
        nextDay2Humidity = data.list[8].main.humidity;
        nextDay2Date = data.list[8].dt_txt;
        nextDay2DateYear = nextDay2Date.slice(0,4);
        nextDay2DateMonth = nextDay2Date.slice(5,7);
        nextDay2DateDay = nextDay2Date.slice(8,10);

        // next day2 DOM elements modification of the text/attributes for display
        nextDay2DateEl.textContent = `${nextDay2DateMonth}/${nextDay2DateDay}/${nextDay2DateYear}`;
        nextDay2ImgTempIconEl.setAttribute("src", nextDay2IconPage);
        nextDay2ImgTempIconEl.setAttribute("alt", "Weather Icon");
        nextDay2TempEl.textContent = nextDay2Temp;
        nextDay2WindEl.textContent = nextDay2Wind;
        nextDay2HumidityEl.textContent = nextDay2Humidity;

        // next day3 forecast variables assigments from API data received 
        nextDay3IconCode = data.list[16].weather[0].icon;
        nextDay3IconPage = `https://openweathermap.org/img/w/${nextDay3IconCode}.png`;
        nextDay3Temp = Math.floor((data.list[16].main.temp - 273.15) * 1.8 + 32);
        nextDay3Wind = data.list[16].wind.speed;
        nextDay3Humidity = data.list[16].main.humidity;
        nextDay3Date = data.list[16].dt_txt;
        nextDay3DateYear = nextDay3Date.slice(0,4);
        nextDay3DateMonth = nextDay3Date.slice(5,7);
        nextDay3DateDay = nextDay3Date.slice(8,10);

        // next day3 DOM elements modification of the text/attributes for display
        nextDay3DateEl.textContent = `${nextDay3DateMonth}/${nextDay3DateDay}/${nextDay3DateYear}`;
        nextDay3ImgTempIconEl.setAttribute("src", nextDay3IconPage);
        nextDay3ImgTempIconEl.setAttribute("alt", "Weather Icon");
        nextDay3TempEl.textContent = nextDay3Temp;
        nextDay3WindEl.textContent = nextDay3Wind;
        nextDay3HumidityEl.textContent = nextDay3Humidity;

        // next day4 forecast variables assigments from API data received 
        nextDay4IconCode = data.list[24].weather[0].icon;
        nextDay4IconPage = `https://openweathermap.org/img/w/${nextDay4IconCode}.png`;
        nextDay4Temp = Math.floor((data.list[24].main.temp - 273.15) * 1.8 + 32);
        nextDay4Wind = data.list[24].wind.speed;
        nextDay4Humidity = data.list[24].main.humidity;
        nextDay4Date = data.list[24].dt_txt;
        nextDay4DateYear = nextDay4Date.slice(0,4);
        nextDay4DateMonth = nextDay4Date.slice(5,7);
        nextDay4DateDay = nextDay4Date.slice(8,10);

        // next day4 DOM elements modification of the text/attributes for display
        nextDay4DateEl.textContent = `${nextDay4DateMonth}/${nextDay4DateDay}/${nextDay4DateYear}`;
        nextDay4ImgTempIconEl.setAttribute("src", nextDay4IconPage);
        nextDay4ImgTempIconEl.setAttribute("alt", "Weather Icon");
        nextDay4TempEl.textContent = nextDay4Temp;
        nextDay4WindEl.textContent = nextDay4Wind;
        nextDay4HumidityEl.textContent = nextDay4Humidity;

        // next day5 forecast variables assigments from API data received 
        nextDay5IconCode = data.list[32].weather[0].icon;
        nextDay5IconPage = `https://openweathermap.org/img/w/${nextDay5IconCode}.png`;
        nextDay5Temp = Math.floor((data.list[32].main.temp - 273.15) * 1.8 + 32);
        nextDay5Wind = data.list[32].wind.speed;
        nextDay5Humidity = data.list[32].main.humidity;
        nextDay5Date = data.list[32].dt_txt;
        nextDay5DateYear = nextDay5Date.slice(0,4);
        nextDay5DateMonth = nextDay5Date.slice(5,7);
        nextDay5DateDay = nextDay5Date.slice(8,10);

        // next day5 DOM elements modification of the text/attributes for display
        nextDay5DateEl.textContent = `${nextDay5DateMonth}/${nextDay5DateDay}/${nextDay5DateYear}`;
        nextDay5ImgTempIconEl.setAttribute("src", nextDay5IconPage);
        nextDay5ImgTempIconEl.setAttribute("alt", "Weather Icon");
        nextDay5TempEl.textContent = nextDay5Temp;
        nextDay5WindEl.textContent = nextDay5Wind;
        nextDay5HumidityEl.textContent = nextDay5Humidity;
        });
};

// function call to display the page inital city weather forecast without any user submitted city input
displayInitialPageCityWeatherForecast();

// click event listener for the city name submitted 
submitBtnEl.addEventListener('click', displaySubmittedCityWeatherForecast);

// click event listener for the city search history button
citySearchHistoryEl.addEventListener('click', function(event){
    displayCitySearchedHistoryWeatherForecast(event);
});

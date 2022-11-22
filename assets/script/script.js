// DOM elements variable declarations
inputCityNameEl = document.querySelector('#inputCityName');
submitBtnEl = document.querySelector('#submitBtn');
cityNameEl = document.querySelector('#cityName');
// need current date element
currentDayImgTempIconEl = document.querySelector('#currentDayImgTempIcon');
currentDayTempEl = document.querySelector('#currentDayTemp');
currentDayWindEl = document.querySelector('#currentDayWind');
currentDayHumidityEl = document.querySelector('#currentDayHumidity');
// need next day 1 element
nextDay1ImgTempIconEl = document.querySelector('#nextDay1ImgTempIcon');
nextDay1TempEl = document.querySelector('#nextDay1Temp');
nextDay1WindEl = document.querySelector('#nextDay1Wind');
nextDay1HumidityEl = document.querySelector('#nextDay1Humidity');
// need next day 2 element
nextDay2ImgTempIconEl = document.querySelector('#nextDay2ImgTempIcon');
nextDay2TempEl = document.querySelector('#nextDay2Temp');
nextDay2WindEl = document.querySelector('#nextDay2Wind');
nextDay2HumidityEl = document.querySelector('#nextDay2Humidity');
// need next day 3 element
nextDay3ImgTempIconEl = document.querySelector('#nextDay3ImgTempIcon');
nextDay3TempEl = document.querySelector('#nextDay3Temp');
nextDay3WindEl = document.querySelector('#nextDay3Wind');
nextDay3HumidityEl = document.querySelector('#nextDay3Humidity');
// need next day 4 element
nextDay4ImgTempIconEl = document.querySelector('#nextDay4ImgTempIcon');
nextDay4TempEl = document.querySelector('#nextDay4Temp');
nextDay4WindEl = document.querySelector('#nextDay4Wind');
nextDay4HumidityEl = document.querySelector('#nextDay4Humidity');
// need next day 5 element
nextDay5ImgTempIconEl = document.querySelector('#nextDay5ImgTempIcon');
nextDay5TempEl = document.querySelector('#nextDay5Temp');
nextDay5WindEl = document.querySelector('#nextDay5Wind');
nextDay5HumidityEl = document.querySelector('#nextDay5Humidity');

// variable declarations 
var openWeatherAPIKey = "86428bd2b8af57a99daa14d368265a5f"; // for open weather API key
var cityNameSubmitted = ""; // for user submitted city name
var currentDayRequestURL = ""; // for URL to get the current day weather forecast data
var nextFivedaysRequestURL = ""; // for URL to get the next 5-days weather forecast data
var cityName = ""; // for city name to be displayed
// need current date variable
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
 * function declaration for API calls to get data for initial city display current day and next 5days forecast and modiy attributes of the DOM element variables
 */
 function getInitialDisplayedCityApi() {
    // variable assigments
    cityNameSubmitted = "Philadelphia";
    currentDayRequestURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityNameSubmitted}&appid=${openWeatherAPIKey}`;

    // fetch request to get data from API for current day weather condition 
    fetch(currentDayRequestURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            // console.log('Data', data);

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
              
            // variable assigment for next 5 days requet URL
            nextFivedaysRequestURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherAPIKey}`;

            // fetch request to get data from API for the next 5-days weather forecast using lon and lat data from previous fecth call 
            fetch(nextFivedaysRequestURL)
                .then(function (response) {
                return response.json();
                })
                .then(function (data) {
                // console.log('Second fetch Data', data);

                // next day1 forecast variables assigments from API data received 
                nextDay1IconCode = data.list[0].weather[0].icon;
                nextDay1IconPage = `http://openweathermap.org/img/w/${nextDay1IconCode}.png`;
                nextDay1Temp = Math.floor((data.list[0].main.temp - 273.15) * 1.8 + 32);
                nextDay1Wind = data.list[0].wind.speed;
                nextDay1Humidity = data.list[0].main.humidity;
                nextDay1Date = data.list[0].dt_txt;
                nextDay1DateYear = date.slice(0,4);
                nextDay1DateMonth = date.slice(5,7);
                nextDay1DateDay = date.slice(8,10);

                // next day1 DOM elements modification of the text/attributes for display

                spanNextDay1ImgTempIconEl.setAttribute("src", nextDay1IconPage);
                spanNextDay1ImgTempIconEl.setAttribute("alt", "Weather Icon");
                spanNextDay1TempEl.textContent = nextDay1Temp;
                spanNextDay1WindEl.textContent = nextDay1Wind;
                spanNextDay1HumidityEl.textContent = nextDay1Humidity;

                // next day2 forecast variables assigments from API data received 
                nextDay2IconCode = data.list[8].weather[0].icon;
                nextDay2IconPage = `http://openweathermap.org/img/w/${nextDay2IconCode}.png`;
                nextDay2Temp = Math.floor((data.list[8].main.temp - 273.15) * 1.8 + 32);
                nextDay2Wind = data.list[8].wind.speed;
                nextDay2Humidity = data.list[8].main.humidity;

                // next day2 DOM elements modification of the text/attributes for display
                spanNextDay2ImgTempIconEl.setAttribute("src", nextDay2IconPage);
                spanNextDay2ImgTempIconEl.setAttribute("alt", "Weather Icon");
                spanNextDay2TempEl.textContent = nextDay2Temp;
                spanNextDay2WindEl.textContent = nextDay2Wind;
                spanNextDay2HumidityEl.textContent = nextDay2Humidity;

                // next day3 forecast variables assigments from API data received 
                nextDay3IconCode = data.list[16].weather[0].icon;
                nextDay3IconPage = `http://openweathermap.org/img/w/${nextDay3IconCode}.png`;
                nextDay3Temp = Math.floor((data.list[16].main.temp - 273.15) * 1.8 + 32);
                nextDay3Wind = data.list[16].wind.speed;
                nextDay3Humidity = data.list[16].main.humidity;

                // next day3 DOM elements modification of the text/attributes for display
                spanNextDay3ImgTempIconEl.setAttribute("src", nextDay3IconPage);
                spanNextDay3ImgTempIconEl.setAttribute("alt", "Weather Icon");
                spanNextDay3TempEl.textContent = nextDay3Temp;
                spanNextDay3WindEl.textContent = nextDay3Wind;
                spanNextDay3HumidityEl.textContent = nextDay3Humidity;

                // next day4 forecast variables assigments from API data received 
                nextDay4IconCode = data.list[24].weather[0].icon;
                nextDay4IconPage = `http://openweathermap.org/img/w/${nextDay4IconCode}.png`;
                nextDay4Temp = Math.floor((data.list[24].main.temp - 273.15) * 1.8 + 32);
                nextDay4Wind = data.list[24].wind.speed;
                nextDay4Humidity = data.list[24].main.humidity;

                // next day4 DOM elements modification of the text/attributes for display
                spanNextDay4ImgTempIconEl.setAttribute("src", nextDay4IconPage);
                spanNextDay4ImgTempIconEl.setAttribute("alt", "Weather Icon");
                spanNextDay4TempEl.textContent = nextDay4Temp;
                spanNextDay4WindEl.textContent = nextDay4Wind;
                spanNextDay4HumidityEl.textContent = nextDay4Humidity;

                // next day5 forecast variables assigments from API data received 
                nextDay5IconCode = data.list[32].weather[0].icon;
                nextDay5IconPage = `http://openweathermap.org/img/w/${nextDay5IconCode}.png`;
                nextDay5Temp = Math.floor((data.list[32].main.temp - 273.15) * 1.8 + 32);
                nextDay5Wind = data.list[32].wind.speed;
                nextDay5Humidity = data.list[32].main.humidity;

                // next day5 DOM elements modification of the text/attributes for display
                spanNextDay5ImgTempIconEl.setAttribute("src", nextDay5IconPage);
                spanNextDay5ImgTempIconEl.setAttribute("alt", "Weather Icon");
                spanNextDay5TempEl.textContent = nextDay5Temp;
                spanNextDay5WindEl.textContent = nextDay5Wind;
                spanNextDay5HumidityEl.textContent = nextDay5Humidity;
        }); 
    });
};


/**
 * function declaration for API calls to get forecast data for submitted city current day and next 5 days forecast and modiy attributes of the DOM element variables
 */
function getSubmittedCityApi() {
    // variable assigments
    cityNameSubmitted = inputCityNameEl.value;
    currentDayRequestURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityNameSubmitted}&appid=${openWeatherAPIKey}`;

    // fetch request to get data from API for current day weather condition 
    fetch(currentDayRequestURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            // console.log('Data', data);

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
              
            // variable assigment for next 5 days requet URL
            nextFivedaysRequestURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherAPIKey}`;

            // fetch request to get data from API for the next 5-days weather forecast using lon and lat data from previous fecth call 
            fetch(nextFivedaysRequestURL)
                .then(function (response) {
                return response.json();
                })
                .then(function (data) {
                // console.log('Second fetch Data', data);

                // next day1 forecast variables assigments from API data received 
                nextDay1IconCode = data.list[0].weather[0].icon;
                nextDay1IconPage = `http://openweathermap.org/img/w/${nextDay1IconCode}.png`;
                nextDay1Temp = Math.floor((data.list[0].main.temp - 273.15) * 1.8 + 32);
                nextDay1Wind = data.list[0].wind.speed;
                nextDay1Humidity = data.list[0].main.humidity;

                // next day1 DOM elements modification of the text/attributes for display
                spanNextDay1ImgTempIconEl.setAttribute("src", nextDay1IconPage);
                spanNextDay1ImgTempIconEl.setAttribute("alt", "Weather Icon");
                spanNextDay1TempEl.textContent = nextDay1Temp;
                spanNextDay1WindEl.textContent = nextDay1Wind;
                spanNextDay1HumidityEl.textContent = nextDay1Humidity;

                // next day2 forecast variables assigments from API data received 
                nextDay2IconCode = data.list[8].weather[0].icon;
                nextDay2IconPage = `http://openweathermap.org/img/w/${nextDay2IconCode}.png`;
                nextDay2Temp = Math.floor((data.list[8].main.temp - 273.15) * 1.8 + 32);
                nextDay2Wind = data.list[8].wind.speed;
                nextDay2Humidity = data.list[8].main.humidity;

                // next day2 DOM elements modification of the text/attributes for display
                spanNextDay2ImgTempIconEl.setAttribute("src", nextDay2IconPage);
                spanNextDay2ImgTempIconEl.setAttribute("alt", "Weather Icon");
                spanNextDay2TempEl.textContent = nextDay2Temp;
                spanNextDay2WindEl.textContent = nextDay2Wind;
                spanNextDay2HumidityEl.textContent = nextDay2Humidity;

                // next day3 forecast variables assigments from API data received 
                nextDay3IconCode = data.list[16].weather[0].icon;
                nextDay3IconPage = `http://openweathermap.org/img/w/${nextDay3IconCode}.png`;
                nextDay3Temp = Math.floor((data.list[16].main.temp - 273.15) * 1.8 + 32);
                nextDay3Wind = data.list[16].wind.speed;
                nextDay3Humidity = data.list[16].main.humidity;

                // next day3 DOM elements modification of the text/attributes for display
                spanNextDay3ImgTempIconEl.setAttribute("src", nextDay3IconPage);
                spanNextDay3ImgTempIconEl.setAttribute("alt", "Weather Icon");
                spanNextDay3TempEl.textContent = nextDay3Temp;
                spanNextDay3WindEl.textContent = nextDay3Wind;
                spanNextDay3HumidityEl.textContent = nextDay3Humidity;

                // next day4 forecast variables assigments from API data received 
                nextDay4IconCode = data.list[24].weather[0].icon;
                nextDay4IconPage = `http://openweathermap.org/img/w/${nextDay4IconCode}.png`;
                nextDay4Temp = Math.floor((data.list[24].main.temp - 273.15) * 1.8 + 32);
                nextDay4Wind = data.list[24].wind.speed;
                nextDay4Humidity = data.list[24].main.humidity;

                // next day4 DOM elements modification of the text/attributes for display
                spanNextDay4ImgTempIconEl.setAttribute("src", nextDay4IconPage);
                spanNextDay4ImgTempIconEl.setAttribute("alt", "Weather Icon");
                spanNextDay4TempEl.textContent = nextDay4Temp;
                spanNextDay4WindEl.textContent = nextDay4Wind;
                spanNextDay4HumidityEl.textContent = nextDay4Humidity;

                // next day5 forecast variables assigments from API data received 
                nextDay5IconCode = data.list[32].weather[0].icon;
                nextDay5IconPage = `http://openweathermap.org/img/w/${nextDay5IconCode}.png`;
                nextDay5Temp = Math.floor((data.list[32].main.temp - 273.15) * 1.8 + 32);
                nextDay5Wind = data.list[32].wind.speed;
                nextDay5Humidity = data.list[32].main.humidity;

                // next day5 DOM elements modification of the text/attributes for display
                spanNextDay5ImgTempIconEl.setAttribute("src", nextDay5IconPage);
                spanNextDay5ImgTempIconEl.setAttribute("alt", "Weather Icon");
                spanNextDay5TempEl.textContent = nextDay5Temp;
                spanNextDay5WindEl.textContent = nextDay5Wind;
                spanNextDay5HumidityEl.textContent = nextDay5Humidity;
        }); 
    });
};

// function call to display the page inital city forecast data
getInitialDisplayedCityApi();

// click event listener when the city name is submitted and function call to getApi
submitBtnEl.addEventListener('click', getSubmittedCityApi);

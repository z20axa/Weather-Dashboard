// DOM elements variable declarations
inputCityNameEl = document.querySelector('#inputCityName');
submitBtnEl = document.querySelector('#submitBtn');
spanCityNameEl = document.querySelector('#spanCityName');
// need current date element
spanCurrentDayImgTempIconEl = document.querySelector('#spanCurrentDayImgTempIcon');
spanCurrentDayTempEl = document.querySelector('#spanCurrentDayTemp');
spanCurrentDayWindEl = document.querySelector('#spanCurrentDayWind');
spanCurrentDayHumidityEl = document.querySelector('#spanCurrentDayHumidity');
// need next day 1 element
spanNextDay1ImgTempIconEl = document.querySelector('#spanNextDay1ImgTempIcon');
spanNextDay1TempEl = document.querySelector('#spanNextDay1Temp');
spanNextDay1WindEl = document.querySelector('#spanNextDay1Wind');
spanNextDay1HumidityEl = document.querySelector('#spanNextDay1Humidity');
// need next day 2 element
spanNextDay2ImgTempIconEl = document.querySelector('#spanNextDay2ImgTempIcon');
spanNextDay2TempEl = document.querySelector('#spanNextDay2Temp');
spanNextDay2WindEl = document.querySelector('#spanNextDay2Wind');
spanNextDay2HumidityEl = document.querySelector('#spanNextDay2Humidity');
// need next day 3 element
spanNextDay3ImgTempIconEl = document.querySelector('#spanNextDay3ImgTempIcon');
spanNextDay3TempEl = document.querySelector('#spanNextDay3Temp');
spanNextDay3WindEl = document.querySelector('#spanNextDay3Wind');
spanNextDay3HumidityEl = document.querySelector('#spanNextDay3Humidity');
// need next day 4 element
spanNextDay4ImgTempIconEl = document.querySelector('#spanNextDay4ImgTempIcon');
spanNextDay4TempEl = document.querySelector('#spanNextDay4Temp');
spanNextDay4WindEl = document.querySelector('#spanNextDay4Wind');
spanNextDay4HumidityEl = document.querySelector('#spanNextDay4Humidity');
// need next day 5 element
spanNextDay5ImgTempIconEl = document.querySelector('#spanNextDay5ImgTempIcon');
spanNextDay5TempEl = document.querySelector('#spanNextDay5Temp');
spanNextDay5WindEl = document.querySelector('#spanNextDay5Wind');
spanNextDay5HumidityEl = document.querySelector('#spanNextDay5Humidity');

// variable declarations 
var openWeatherAPIKey = "86428bd2b8af57a99daa14d368265a5f"; // for open weather API key
var cityNameSubmitted = ""; // for user submitted city name
var currentDayRequestURL = ""; // for URL to get the current day weather forecast data
var nextFivedaysRequestURL = ""; // for URL to get the next 5-days weather forecast data
var spanCityName = ""; // for city name to be displayed
// need current date variable
var currentDayIconCode = ""; // for current day forecast icon code data
var currentDayIconPage = ""; // for current day forecast icon code page data
var currentDayTemp = ""; // for current day forecast temp data
var currentDayWind = "" // for current day forecast wind data
var currentDayHumidity = "" // for current day forecast humidity data
var lon = ""; // for city submitted lon data
var lat = ""; // for city submitted lat data
// need next day 1 date varible
var nextDay1IconCode = ""; // for next day1 forecast icon code data
var nextDay1IconPage = ""; // for next day1 forecast icon code page data
var nextDay1Temp = ""; // for next day1 forecast temp data
var nextDay1Wind = ""; // for next day1 forecast wind data
var nextDay1Humidity = ""; // for next day1 forecast humidity data
// need next day 2 date varible
var nextDay2IconCode = ""; // for next day2 forecast icon code data
var nextDay2IconPage = ""; // for next day2 forecast icon code page data
var nextDay2Temp = ""; // for next day2 forecast temp data
var nextDay2Wind = ""; // for next day2 forecast wind data
var nextDay2Humidity = ""; // for next day2 forecast humidity data
// need next day 3 date varible
var nextDay3IconCode = ""; // for next day3 forecast icon code data
var nextDay3IconPage = ""; // for next day3 forecast icon code page data
var nextDay3Temp = ""; // for next day3 forecast temp data
var nextDay3Wind = ""; // for next day3 forecast wind data
var nextDay3Humidity = ""; // for next day3 forecast humidity data
// need next day 4 date varible
var nextDay4IconCode = ""; // for next day4 forecast icon code data
var nextDay4IconPage = ""; // for next day4 forecast icon code page data
var nextDay4Temp = ""; // for next day4 forecast temp data
var nextDay4Wind = ""; // for next day4 forecast wind data
var nextDay4Humidity = ""; // for next day4 forecast humidity data
// need next day 5 date varible
var nextDay5IconCode = ""; // for next day5 forecast icon code data
var nextDay5IconPage = ""; // for next day5 forecast icon code page data
var nextDay5Temp = ""; // for next day5 forecast temp data
var nextDay5Wind = ""; // for next day5 forecast wind data
var nextDay5Humidity = ""; // for next day5 forecast humidity data

/**
 * function declaration for API calls to get data and modiy attributes of the DOM element variables
 */
function getApi() {
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


// click event listener when the city name is submitted and function call to getApi
submitBtnEl.addEventListener('click', getApi);

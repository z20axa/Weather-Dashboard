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
var currentDayIconCode = ""; // for current day icon code data
var currentDayIconPage = ""; // for current day icon code page data
var currentDayTemp = ""; // for current day temp data
var currentDayWind = "" // for current day wind data
var currentDayHumidity = "" // for current day humidity data
var lon = ""; // for city sybmitted lon data
var lat = ""; // for city sybmitted lat data
// need next day 1 date varible
var nextDay1IconCode = "";
var nextDay1IconPage = "";
var nextDay1Temp = "";
var nextDay1Wind = "";
var nextDay1Humidity = "";
// need next day 2 date varible
var nextDay2IconCode = "";
var nextDay2IconPage = "";
var nextDay2Temp = "";
var nextDay2Wind = "";
var nextDay2Humidity = "";
// need next day 3 date varible
var nextDay3IconCode = "";
var nextDay3IconPage = "";
var nextDay3Temp = "";
var nextDay3Wind = "";
var nextDay3Humidity = "";
// need next day 4 date varible
var nextDay4IconCode = "";
var nextDay4IconPage = "";
var nextDay4Temp = "";
var nextDay4Wind = "";
var nextDay4Humidity = "";
// need next day 5 date varible
var nextDay5IconCode = "";
var nextDay5IconPage = "";
var nextDay5Temp = "";
var nextDay5Wind = "";
var nextDay5Humidity = "";

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
              
            // variable assigment
            nextFivedaysRequestURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherAPIKey}`;

            // fetch request to get data from API for the next 5-days weather forecast using lon and lat data from previous fecth call 
            fetch(nextFivedaysRequestURL)
                .then(function (response) {
                return response.json();
                })
                .then(function (data) {
                // console.log('Second fetch Data', data);

                //next day 1 forecast variables assigments from API data received 
                nextDay1IconCode = data.list[0].weather[0].icon;
                nextDay1IconPage = `http://openweathermap.org/img/w/${nextDay1IconCode}.png`;
                nextDay1Temp = Math.floor((data.list[0].main.temp - 273.15) * 1.8 + 32);
                nextDay1Wind = data.list[0].wind.speed;
                nextDay1Humidity = data.list[0].main.humidity;
                // console.log('icon code', nextDay1IconCode);
                // console.log('icon img', nextDay1IconPage);
                // console.log('Temp in F', nextDay1Temp);
                // console.log('Wind', nextDay1Wind);
                // console.log('Humidity', nextDay1Humidity);

                // // next day 1 DOM elements modification of the text/attributes for display
                spanNextDay1ImgTempIconEl.setAttribute("src", nextDay1IconPage);
                spanNextDay1ImgTempIconEl.setAttribute("alt", "Weather Icon");
                spanNextDay1TempEl.textContent = nextDay1Temp;
                spanNextDay1WindEl.textContent = nextDay1Wind;
                spanNextDay1HumidityEl.textContent = nextDay1Humidity;

                //next day 2 forecast variables assigments from API data received 
                nextDay2IconCode = data.list[8].weather[0].icon;
                nextDay2IconPage = `http://openweathermap.org/img/w/${nextDay1IconCode}.png`;
                nextDay2Temp = Math.floor((data.list[8].main.temp - 273.15) * 1.8 + 32);
                nextDay2Wind = data.list[8].wind.speed;
                nextDay2Humidity = data.list[8].main.humidity;

                // // next day 2 DOM elements modification of the text/attributes for display
                spanNextDay2ImgTempIconEl.setAttribute("src", nextDay2IconPage);
                spanNextDay2ImgTempIconEl.setAttribute("alt", "Weather Icon");
                spanNextDay2TempEl.textContent = nextDay2Temp;
                spanNextDay2WindEl.textContent = nextDay2Wind;
                spanNextDay2HumidityEl.textContent = nextDay2Humidity;

                //next day 3 forecast variables assigments from API data received 
                nextDay3IconCode = data.list[16].weather[0].icon;
                nextDay3IconPage = `http://openweathermap.org/img/w/${nextDay3IconCode}.png`;
                nextDay3Temp = Math.floor((data.list[16].main.temp - 273.15) * 1.8 + 32);
                nextDay3Wind = data.list[16].wind.speed;
                nextDay3Humidity = data.list[16].main.humidity;

                // // next day 3 DOM elements modification of the text/attributes for display
                spanNextDay3ImgTempIconEl.setAttribute("src", nextDay3IconPage);
                spanNextDay3ImgTempIconEl.setAttribute("alt", "Weather Icon");
                spanNextDay3TempEl.textContent = nextDay3Temp;
                spanNextDay3WindEl.textContent = nextDay3Wind;
                spanNextDay3HumidityEl.textContent = nextDay3Humidity;

                //next day 4 forecast variables assigments from API data received 
                nextDay2IconCode = data.list[8].weather[0].icon;
                nextDay2IconPage = `http://openweathermap.org/img/w/${nextDay1IconCode}.png`;
                nextDay2Temp = Math.floor((data.list[8].main.temp - 273.15) * 1.8 + 32);
                nextDay2Wind = data.list[8].wind.speed;
                nextDay2Humidity = data.list[8].main.humidity;

                // // // next day 4 DOM elements modification of the text/attributes for display
                // spanNextDay2ImgTempIconEl.setAttribute("src", nextDay2IconPage);
                // spanNextDay2ImgTempIconEl.setAttribute("alt", "Weather Icon");
                // spanNextDay2TempEl.textContent = nextDay2Temp;
                // spanNextDay2WindEl.textContent = nextDay2Wind;
                // spanNextDay2HumidityEl.textContent = nextDay2Humidity;

                // //next day 5 forecast variables assigments from API data received 
                // nextDay2IconCode = data.list[8].weather[0].icon;
                // nextDay2IconPage = `http://openweathermap.org/img/w/${nextDay1IconCode}.png`;
                // nextDay2Temp = Math.floor((data.list[8].main.temp - 273.15) * 1.8 + 32);
                // nextDay2Wind = data.list[8].wind.speed;
                // nextDay2Humidity = data.list[8].main.humidity;

                // // // next day 5 DOM elements modification of the text/attributes for display
                // spanNextDay2ImgTempIconEl.setAttribute("src", nextDay2IconPage);
                // spanNextDay2ImgTempIconEl.setAttribute("alt", "Weather Icon");
                // spanNextDay2TempEl.textContent = nextDay2Temp;
                // spanNextDay2WindEl.textContent = nextDay2Wind;
                // spanNextDay2HumidityEl.textContent = nextDay2Humidity;
        }); 
    });
};

// click event listener when the city name is submitted and function call to getApi
submitBtnEl.addEventListener('click', getApi);

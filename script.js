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

    var requestURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + openweatherAPIKey;

    fetch(requestUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
      
    });
};

// click event listener when the city name is submitted and function call to getApi
submitbtnEl.addEventListener('click', getApi);

console.log('hello');

citynameEL = document.querySelector('#cityName');
submitbtnEl = document.querySelector('#submitBtn');

console.log('City Name', cityName);


var openweatherAPIKey = "86428bd2b8af57a99daa14d368265a5f";

var cityName;

function getApi() {

    var requestURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + openweatherAPIKey;

    fetch(requestUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
      
    });
};

submitbtnEl.addEventListener('click', getApi);

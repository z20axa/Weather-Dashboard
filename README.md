# Server-Side APIs: Weather Dashboard

## Description

This is a weather dashboard app that runs in the browser and feature dynamically updated HTML and CSS powered by JavaScript.

The app uses the [5 Day Weather Forecast](https://openweathermap.org/forecast5) from the Open Weather Map server side to retrieve weather data for cities.

It also uses 'localStorage' to store any persistent data. 

<!-- 
The base URL should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys). -->

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```
## Website Link

<!-- Follow [THIS LINK](https://z20axa.github.io/Work-Day-Scheduler/) -->

## Technologies Used

- HTML
- CSS
- JavaScript
- Server-side: [Open Weather Map](https://openweathermap.org/forecast5)

## Deployed Website ScreenShot

<!-- ![WebSite SreenShot](Web_capture_5-11-2022_15024_.jpeg "WebSite ScreenShot") -->
import "./style.css";
import { currCityInfo } from "./changeCityInfo";
import { createCard } from "./createForecastCards";
//npx webpack --watch

const request = 'http://api.weatherapi.com/v1/forecast.json?key=a9cede541c974464a2e182622242705&q=new york&days=5';

const searchBtn = document.querySelector('.search-btn');
const cBtn = document.querySelector('.cel');
const fBtn = document.querySelector('.fah');
const forecastContainer = document.querySelector('.forecast-containers');
let tempType = 'C';
let currInput = 'indianapolis';

getCityWeather('indianapolis');
getForecast(currInput, tempType)

async function getForecast(input, tempType) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a9cede541c974464a2e182622242705&q=${input}&days=5`, {mode: 'cors'});
    const forecastData = await response.json();
    const forecastLst = forecastData.forecast.forecastday;
    forecastContainer.innerHTML = '';
    for (let i = 0; i < forecastLst.length; i++) {
        const forecastDay = forecastLst[i].day;
        const maxTempC = forecastDay.maxtemp_c
        const minTempC = forecastDay.mintemp_c;
        const maxTempF = forecastDay.maxtemp_f;
        const minTempF = forecastDay.mintemp_f;
        const day = forecastLst[i].date;
        const weather = forecastDay.condition.text
        forecastContainer.appendChild(createCard(maxTempC, minTempC, maxTempF, minTempF, day, weather, tempType));
    }
}
getForecast(currInput);

async function getCityWeather(input) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a9cede541c974464a2e182622242705&q=${input}`, {mode: 'cors'});
    const cityData = await response.json();
    //img.src = catData.data.images.original.url;
    const tempC = cityData.current.temp_c;
    const tempF = cityData.current.temp_f;
    const currCondition = cityData.current.condition.text;
    const currCity = cityData.location.name;
    const currWindStatus = cityData.current.wind_mph;
    const currHumidity = cityData.current.humidity;
    const currVisibility = cityData.current.vis_miles;
    const currPressure = cityData.current.pressure_mb;

    var dob = new Date();
    var dobArr = dob.toDateString().split(' ');
    var currDate = dobArr[2] + ' ' + dobArr[1] + ' ' + dobArr[3];

    if (tempType === 'F') {
        currCityInfo(currCity, tempF, currCondition, currDate, currWindStatus, currHumidity, currVisibility, currPressure, tempType);
        getForecast(currInput, tempType);
      }
      else {
        currCityInfo(currCity, tempC, currCondition, currDate, currWindStatus, currHumidity, currVisibility, currPressure, tempType);
        getForecast(currInput, tempType);
      }

  }

cBtn.addEventListener('click', function(e) {
    tempType = 'C';
    getCityWeather(currInput);
    getForecast(currInput, tempType);

    cBtn.style.backgroundColor = 'white';
    cBtn.style.color = 'black';

    fBtn.style.backgroundColor = '#232B3B';
    fBtn.style.color = 'white';
})

fBtn.addEventListener('click', function(e) {
    tempType = 'F';
    getCityWeather(currInput);
    getForecast(currInput, tempType);
    fBtn.style.backgroundColor = 'white';
    fBtn.style.color = 'black';

    cBtn.style.backgroundColor = '#232B3B';
    cBtn.style.color = 'white';
})

searchBtn.addEventListener('click', function(e) {
    const input = document.querySelector('input').value;
    currInput = input;
    getCityWeather(input);
});

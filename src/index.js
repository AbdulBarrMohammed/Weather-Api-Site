import "./style.css";
import { currCityInfo } from "./changeCityInfo";

const request = 'http://api.weatherapi.com/v1/forecast.json?key=a9cede541c974464a2e182622242705&q=new york&days=5';

const searchBtn = document.querySelector('.search-btn');
const cBtn = document.querySelector('.cel');
const fBtn = document.querySelector('.fah');
let tempType = 'C';
let currInput = 'indianapolis';

getCityWeather('indianapolis');

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


    const currDate = '06-29-2024';

    if (tempType === 'F') {
        currCityInfo(currCity, tempF, currCondition, currDate, currWindStatus, currHumidity, currVisibility, currPressure, tempType);
      }
      else {
        currCityInfo(currCity, tempC, currCondition, currDate, currWindStatus, currHumidity, currVisibility, currPressure, tempType);
      }

  }

cBtn.addEventListener('click', function(e) {
    tempType = 'C';
    getCityWeather(currInput);

    cBtn.style.backgroundColor = 'white';
    cBtn.style.color = 'black';

    fBtn.style.backgroundColor = '#232B3B';
    fBtn.style.color = 'white';


})


fBtn.addEventListener('click', function(e) {
    tempType = 'F';
    getCityWeather(currInput);
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

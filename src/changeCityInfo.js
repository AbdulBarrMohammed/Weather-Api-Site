import sunny from './img/sun.png';
import thunderStorm from './img/thunderstorm.png';
import partlyCloudy from './img/cloudy.png';
import cloudy from './img/clouds.png';
import rain from './img/storm.png';


function currCityInfo(cityName, temp, weather, date, wind, humidity, visibility, pressure, tempType) {
    const currCityName = document.querySelector('.city-name');
    const currTemp = document.querySelector('.sidebar-temp');
    const currWeather = document.querySelector('.sidebar-weather');
    const currDate = document.querySelector('.sidebar-date');
    const currWind = document.querySelector("#card-wind");
    const currVisibility = document.querySelector('#card-visibility');
    const currHumidity = document.querySelector('#card-huminity');
    const currPressure = document.querySelector("#card-pressure");

    const weatherPic = document.querySelector('.sidebar-img');
    let temperature ="\u00B0";

    currCityName.textContent = cityName;
    if (tempType == 'C') {
        currTemp.textContent = `${temp}${temperature}C`;
    }
    else {
        currTemp.textContent = `${temp}${temperature}F`;
    }
    currWeather.textContent = weather;
    currDate.textContent = date;
    currWind.textContent = `${wind} mph`;
    currVisibility.textContent = `${visibility} miles`;
    currHumidity.textContent = `${humidity}%`;
    currPressure.textContent = `${pressure} mb`;

    if (weather === "Partly cloudy") {
        weatherPic.src = partlyCloudy;
    }
    else if (weather === 'Clear' || weather === 'Sunny') {
        weatherPic.src = sunny;
    }
    else if (weather === 'Overcast') {
        weatherPic.src = cloudy;
    }
    else if (weather.includes('thunder')) {
        weatherPic.src = thunderStorm;
    }
    else if (weather.includes('rain')) {
        weatherPic.src = rain;
    }
    else if (weather === 'Cloudy') {
        weatherPic.src = cloudy;
    }
    else {
        weatherPic.src = cloudy;
    }
}

export {currCityInfo};

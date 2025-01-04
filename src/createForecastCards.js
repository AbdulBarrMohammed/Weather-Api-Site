import sunny from './img/sun.png';
import thunderStorm from './img/thunderstorm.png';
import partlyCloudy from './img/cloudy.png';
import cloudy from './img/clouds.png';
import rain from './img/storm.png';
import snow from './img/snow.png'


function createCard(maxTempC, minTempC, maxTempF, minTempF, day, weather, tempType) {
    const forecastCard = document.createElement('div');
    forecastCard.style.display = 'flex';
    forecastCard.style.flexDirection = 'column';
    forecastCard.style.justifyContent = 'center';
    forecastCard.style.alignItems = 'center';
    forecastCard.style.padding = '10px';
    forecastCard.style.backgroundColor = '#232B3B';
    forecastCard.style.rowGap = '30px';
    forecastCard.style.paddingTop = '15px';
    forecastCard.style.paddingBottom = '15px';
    forecastCard.style.borderRadius = '10px';

    const pDate = document.createElement('p');
    var dob = new Date(day);
    var dobArr = dob.toDateString().split(' ');
    var currDate = dobArr[2] + ' ' + dobArr[1] + ' ' + dobArr[3];
    pDate.textContent = currDate;
    forecastCard.appendChild(pDate);

    const weatherPic = document.createElement('img');
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
    else if (weather.includes('snow')) {
        weatherPic.src = snow;
    }
    else if (weather === 'Cloudy') {
        weatherPic.src = cloudy;
    }
    else {
        weatherPic.src = cloudy;
    }
    forecastCard.appendChild(weatherPic);

    const highLowDiv = document.createElement('div');
    highLowDiv.style.display = 'flex';
    highLowDiv.style.justifyContent = 'space-between';
    highLowDiv.style.columnGap = '20px';

    const pHigh = document.createElement('p');
    const pLow = document.createElement('p');
    let temperature ="\u00B0";

    if (tempType == 'F') {
        pHigh.textContent = `${maxTempF}${temperature}F`;
        pLow.textContent = `${minTempF}${temperature}F`;
    }
    else {
        pHigh.textContent = `${maxTempC}${temperature}C`;
        pLow.textContent = `${minTempC}${temperature}C`;
    }

    highLowDiv.appendChild(pHigh);
    highLowDiv.appendChild(pLow);

    forecastCard.appendChild(highLowDiv);

    return forecastCard;
}


export {createCard};

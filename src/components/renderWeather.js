import kelvinToCelsius from '../utils/convertTemp.js'


const renderWeather=(data)=>{

    const divResults=document.querySelector('#results');

    const dataHTML=`
    <div class="weatherBox">
        <p class="temperatureActual">${kelvinToCelsius(data.main.temp)}°C</p>
        <span class="country">${data.sys.country}</span>
        <p align=center><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" width="50" class="iconWeather"> </p>                       
        <p class="city">${data.name}</p>
        <p class="descriptionWeather">${data.weather[0].description}</p>
        <p class="temperatureMaxMin">
            <span>Max:</span>
            <span>Min:</span>             
        </p>
    </div>`;

   divResults.innerHTML=dataHTML;
}

export default renderWeather;
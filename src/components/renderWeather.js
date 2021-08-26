import kelvinToCelsius from '../utils/convertTemp.js';
import timeConverter from '../utils/convertTime.js';
const input=document.querySelector('#searchBox');
const resultsContainer=document.querySelector('#results');

resultsContainer.addEventListener('click',(event)=>{

    if(event.target.id==='close'){
        event.target.parentElement.remove();
        input.value="";
        input.focus();
    }  

});

const renderWeather=(data)=>{
    const divResults=document.querySelector('#results');

    const dataHTML=`
    <div class="weatherBox">
        <p class="temperatureActual">${kelvinToCelsius(data.main.temp)}°C</p>
        <p class="country">${data.sys.country}</p>
        <p class="iconWeather"><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" width="50"> </p>                       
        <p class="city">${data.name}</p>
        <p class="descriptionWeather">${data.weather[0].description}</p>
        <p class="temperatureMaxMin">
            <span>Min: ${kelvinToCelsius(data.main.temp_min)}°C</span>
            <span>Max: ${kelvinToCelsius(data.main.temp_max)}°C</span>             
        </p>
        <p class="secondaryData">Humedad: ${data.main.humidity} %</p>
        <p class="secondaryData">Hora Salida Sol: ${timeConverter(data.sys.sunrise)}</p>
        <p class="secondaryData">Hora Puesta de Sol: ${timeConverter(data.sys.sunset)}</p> 
        <span id="close" class="close">Cerrar</span> 
    </div>`;
   divResults.innerHTML=dataHTML;
  
}
export default renderWeather;//Lo exportamos para que sea ocuapdo por el getweather.js
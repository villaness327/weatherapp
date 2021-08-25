import kelvinToCelsius from '../utils/convertTemp.js'
import timeConverter from '../utils/timeConverter.js';
const divResults=document.querySelector('#results');

const close=document.querySelector('img#close');
const input=document.querySelector('#searchBox');
close.addEventListener('click',()=>{

  divResults.innerHTML="";
  input.value="";
  

});


const renderWeather=(data)=>{

    const dataHTML=`
    <div class="weatherBox">
        <p class="temperatureActual">${kelvinToCelsius(data.main.temp)}°C</p>
        <span class="country">${data.sys.country}</span>
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
        <p class="close"><img src="./src/images/close.png" alt="" id="close"></p>     
    </div>`;
   divResults.innerHTML=dataHTML;
}







export default renderWeather;//Lo exportamos para que sea ocuapdo por el getweather.js
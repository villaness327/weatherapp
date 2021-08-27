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
        <section class="temperatureActual">${kelvinToCelsius(data.main.temp)}°C</section>
        <section class="iconWeather"><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" width="50"> </section>                       
        <section class="city">${data.name}</section>
        <section class="country">${data.sys.country}</section>
        <section class="descriptionWeather">${data.weather[0].description}</section>
        <section class="temperatureMaxMin">
            <span>Min: ${kelvinToCelsius(data.main.temp_min)}°C</span>
            <span>Max: ${kelvinToCelsius(data.main.temp_max)}°C</span>             
        </section>
        <section class="secondaryData">Humedad: ${data.main.humidity} %</section>
        <section class="secondaryData">Hora Salida de Sol: ${timeConverter(data.sys.sunrise)}</section>
        <section class="secondaryData">Hora Puesta de Sol: ${timeConverter(data.sys.sunset)}</section> 
        <span id="close" class="close">Cerrar</span> 
    </div>`;
   divResults.innerHTML=dataHTML;
  
}
export default renderWeather;//Lo exportamos para que sea ocuapdo por el getweather.js
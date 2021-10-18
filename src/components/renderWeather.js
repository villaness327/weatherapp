import kelvinToCelsius from '../utils/convertTemp.js';
const input=document.querySelector('#SearchBox');
const resultsContainer=document.querySelector('#Results');


resultsContainer.addEventListener('click',(event)=>{

    if(event.target.id==='Close'){

        console.log(event.target.parentElement);
        event.target.parentElement.remove();
        input.value="";
        input.focus();
    }  

});


const renderWeather=(data)=>{
    const divResults=document.querySelector('#Results');

    const dataHTML=`
    <div class="WeatherBox">
        <section class="TemperatureActual">${kelvinToCelsius(data.main.temp)}°C</section>
        <section class="IconWeather"><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" width="50"> </section>                       
        <section class="City">${data.name}</section>
        <section class="Country">${data.sys.country}</section>
        <section class="DescriptionWeather">${data.weather[0].description}</section>
        <section class="TemperatureMaxMin">
            <span>Min: ${kelvinToCelsius(data.main.temp_min)}°C</span>
            <span>Max: ${kelvinToCelsius(data.main.temp_max)}°C</span>             
        </section>
        <section class="SecondaryData">Humedad: ${data.main.humidity} %</section>
        <section class="SecondaryData">
          <span>Longitud: ${data.coord.lon}</span>
          <span>Latitud: ${data.coord.lat}</span>
        </section>
        <span id="Close" class="Close">X</span> 
    </div>`;
   divResults.innerHTML=dataHTML;  
}
   

export default renderWeather;//Lo exportamos para que sea ocuapdo por el getweather.js
import renderWeather from "./renderWeather.js";
const API_KEY='5802057e27beed87b79a8ad738ca1558';
const divResults=document.querySelector('#results');
const input=document.querySelector('#searchBox');

const getWeather=async()=>{   

    if(!input.value){
      divResults.textContent='Debe ingresar Algo';
      return false;
    }
 
    try{
  
      const URL_API=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&lang=sp`;
      const response=await fetch(URL_API);    
      const data=await response.json();
      renderWeather(data);

    }catch(error){
      divResults.textContent='A ocurrido un error o la ciudad no se encuentra' 
      console.error(`A ocurrido el siguiente error: ${error}`);
    }
  }

  export default getWeather;// Lo exportamos para que en index.js lo pueda importar
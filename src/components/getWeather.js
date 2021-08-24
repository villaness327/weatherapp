import renderWeather from "./renderWeather.js";

const input=document.querySelector('#searchBox');

const getWeather=async()=>{
    
    const API_KEY='5802057e27beed87b79a8ad738ca1558';

    if(!input.value){
        input.placeholder='No se Ingreso Ciudad';
      return;
    }
  
    try{
  
      const URL_API=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&lang=sp`;
  
      const response=await fetch(URL_API);
        
       if (response.status!=200){  
        return false;
       }
  
      const data=await response.json();
      renderWeather(data);

    }catch(error){
      console.error(`A ocurrido el siguiente error:${error}`);
    }
  }

  export default getWeather;
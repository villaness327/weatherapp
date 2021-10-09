import getWeather from './components/getWeather.js';

const menu=document.querySelector('.NavMenu');//icono de menu
const menuItems=document.querySelector('.Menu'); //ul


const buttonSearch=document.querySelector('#ButtonSearchBox');

buttonSearch.addEventListener('click',getWeather);

const menuDisplay=()=>{

    if(window.innerWidth<=550){
        menuItems.classList.toggle('Visible');
    }
}

menu.addEventListener('click',menuDisplay);
menuItems.addEventListener('click',menuDisplay);











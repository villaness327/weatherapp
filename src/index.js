import getWeather from './components/getWeather.js'

const layer=document.querySelector('#layerMenu');
const menuIcon=document.querySelector('#menuIcon');
const containerUl=document.querySelector('ul');
const buttonSearch=document.querySelector('#buttonSearchBox');

layer.style.visibility='hidden';

const showMenu=()=>{
layer.style.visibility='visible';    
};  

const hideMenu=()=>{  
layer.style.visibility='hidden';  
};

menuIcon.addEventListener('click',showMenu);
containerUl.addEventListener('click',hideMenu);
buttonSearch.addEventListener('click',getWeather);
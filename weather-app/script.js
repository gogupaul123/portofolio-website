//Open Weather Map API
const api ={
    key: "c8ff6cfd3c0ea1919145065d19d489e0",
    baseUrl:'https://api.openweathermap.org/data/2.5/'
}

//Variables
let noInput = 'Please enter a city ...';
    
let now = new Date();


//HTML Elements
const searchBox = document.querySelector('.search-box');
const hour = document.querySelector('.hour');
const date = document.querySelector('.date');
date.innerText = dateBuilder(now);




//Event Listeners
searchBox.addEventListener('keypress', searchFunction);



function searchFunction(event){
   

    if(event.keyCode ===13 & searchBox.value.length >=2){
        getResults(searchBox.value);
        searchBox.value = 'Please enter a valid city ...';
        searchBox.style.color = 'rgba(255, 0, 0, 0.700)';
        setTimeout(()=>{
            searchBox.value = '';
            searchBox.style.color = 'inherit';
        }, 800);
        

    }
    else if(event.keyCode ===13 & searchBox.value.length<=1){
        searchBox.value = noInput;
        searchBox.style.color = 'rgba(255, 0, 0, 0.7)';
        setTimeout(()=>{
            searchBox.value = '';
            searchBox.style.color = 'inherit';
            
        },690);
    }
    
        
    

}


function getResults(query){
    fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(function(weather){return weather.json(); })
    .then(displayResults);
   
   
}

function displayResults(weather){
   

    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
 
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)} <span> °C</span>`;

    let weather_element = document.querySelector('.current .weather');
    weather_element.innerText = weather.weather[0].main;

    let highLow = document.querySelector('.high-low');
    highLow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
    searchBox.value = '';
    
    
   

}

//Initial weather display when entering the page
function initialDisplay(){
    fetch(`${api.baseUrl}weather?q=Bucharest&units=metric&APPID=${api.key}`)
    .then(function(weather){return weather.json(); })
    .then(initialDisplayNext);
}
function initialDisplayNext(weather){
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)} <span> °C</span>`;
    let weather_element = document.querySelector('.current .weather');
    weather_element.innerText = weather.weather[0].main;

    let highLow = document.querySelector('.high-low');
    highLow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
    searchBox.value = '';
    
}
initialDisplay();


function dateBuilder(d){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`
}

function time(){
    let meridian;
    
    let d = new Date();
    let hours = d.getHours();
    let minutes= d.getMinutes();
    let seconds = d.getSeconds();
    if(hours>12){
        meridian = 'PM';
    }
    else{
        meridian = 'AM';
    }

    let time = `${hours}:${minutes}:${seconds} ${meridian}`;
    hour.innerText = time;
}

setInterval(time, 1000);




//BOTTOM BUTTONS
//just a variable for a css class named so
const button = 'selected-button'; 

//Selectors for the bottom cirlces
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const container = document.querySelector('.container');

//Css class variables named so
const bg1 = 'bg1';
const bg2 = 'bg2';
const bg3 = 'bg3';

//Functions

//Function for adding a css class that has a bg-image and removing the others
function changeBackground(bgImage, idleBg1, idleBg2){
    container.classList.add(bgImage);
    container.classList.remove(idleBg1);
    container.classList.remove(idleBg2);

}

//Function for adding the 'selected-button' class to one button while removing the class from others
function fullButton(node, idleNode1, idleNode2){
    node.classList.add(button);
    idleNode1.classList.remove(button);
    idleNode2.classList.remove(button);

}

//Button1
function changeBtn1(){
    fullButton(btn1,btn2,btn3);
    changeBackground(bg1, bg2, bg3);
}
//Button2
function changeBtn2(){
    fullButton(btn2,btn3,btn1);
    changeBackground(bg2, bg3, bg1);
}
//Button3
function changeBtn3(){
    fullButton(btn3,btn1,btn2);
    changeBackground(bg3, bg1, bg2);
}

//Event listeners

// btn1.addEventListener('click', changeBtn1);
// btn2.addEventListener('click', changeBtn2);
// btn3.addEventListener('click', changeBtn3);


//Connection between buttons and bg images

//Removing 'selected-button' class

const one= document.querySelector('.city');
const two = document.querySelector('.date');
const three = document.querySelector('.hour');
const four = document.querySelector('.temp');
const five = document.querySelector('.temp span');

function black(p1,p2,p3){
    p1.classList.add('black');
    p2.classList.add('black');
    p3.classList.add('black');
   
   
}
function blackRemove(p1,p2,p3){
    p1.classList.remove('black');
    p2.classList.remove('black');
    p3.classList.remove('black');
   

}


function removeSelected(element1, element2){
    element1.classList.remove(button);
    element2.classList.remove(button);
}

function link(){
    if(container.classList.contains(bg1)){
        btn1.classList.add(button);
        removeSelected(btn2, btn3);
        
    }
    else if(container.classList.contains(bg2)){
        btn2.classList.add(button);
        removeSelected(btn1, btn3);
        black(one,two,three);
        
    }
    else if(container.classList.contains(bg3)){
         btn3.classList.add(button);
         removeSelected(btn1, btn2);
         blackRemove(one,two,three);
    }

}
//Refreshing every 100ms so the buttons update
setInterval(link, 100);

//Automatic background change

function add(element){
    container.classList.add(element);
}

function autoChange(){
  function autoChange1(){
    if(container.classList.contains(bg1)){
        setTimeout(()=>{
            add(bg2);
            container.classList.remove(bg1);
        }, 10000);
    }
  }  
   function autoChange2(){
    if(container.classList.contains(bg2)){
        setTimeout(()=>{
            add(bg3);
            container.classList.remove(bg2);
        }, 10000);
      }
   }
   function autoChange3(){
    if(container.classList.contains(bg3)){
        setTimeout(()=>{
            add(bg1);
            container.classList.remove(bg3);
        }, 10000);
      }
   }
   autoChange1();
   autoChange2();
   autoChange3();

    
}

setInterval(autoChange, 100);




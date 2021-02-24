const gridProject1= document.querySelector('.grid-project1');
const img1 = document.querySelector('.img1');
const text1 = document.querySelector('.text1');

const gridProject2 = document.querySelector('.grid-project2');
const img2= document.querySelector('.img2');
const text2 = document.querySelector('.text2');

const gridProject3 = document.querySelector('.grid-project3');
const img3 = document.querySelector('.img3');
const text3 = document.querySelector('.text3');

const gridProject4 = document.querySelector('.grid-project4');
const img4= document.querySelector('.img4');
const text4= document.querySelector('.text4');


function addDisplay(target){

   setTimeout(()=> {target.classList.add('display');
                    
}, 10)}; 

function addOpacity(target){
    target.classList.add('opacity');
}

function addScale(target){
    target.classList.add('scale');
}


gridProject1.addEventListener('mouseenter', ()=>{
    addOpacity(img1);
    addScale(img1);
    addDisplay(text1);
    
});   
  


gridProject1.addEventListener('mouseleave', ()=>{
    img1.classList.remove('opacity');
    text1.classList.remove('display');
    img1.classList.remove('scale');
    
})

gridProject2.addEventListener('mouseenter', ()=>{
   addOpacity(img2);
   addScale(img2);
   addDisplay(text2);
    
 
})

gridProject2.addEventListener('mouseleave', ()=>{
    img2.classList.remove('opacity');
    img2.classList.remove('scale');
    text2.classList.remove('display');
    
 
})

gridProject3.addEventListener('mouseenter', ()=>{
    addOpacity(img3);
    addScale(img3);
    addDisplay(text3);
 
})
gridProject3.addEventListener('mouseleave', ()=>{
    img3.classList.remove('opacity');
    img3.classList.remove('scale');
    text3.classList.remove('display');
    
 
})

gridProject4.addEventListener('mouseenter', ()=>{
    addOpacity(img4);
    addScale(img4);
    addDisplay(text4);
 
})
gridProject4.addEventListener('mouseleave', ()=>{
    img4.classList.remove('opacity');
    img4.classList.remove('scale');
    text4.classList.remove('display');
    
 
})




let text = '';
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
function randomKey(){
    for(i=0;i<5;i++){
        text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        
    }
    console.log(text);
    text = '';
}

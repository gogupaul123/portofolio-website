const grid1 = document.querySelector('.grid-project1')
const text1 = document.querySelector('.text1')
const img1 = document.querySelector('.img1') 

const grid2 = document.querySelector('.grid-project2')
const text2 = document.querySelector('.text2')
const img2 = document.querySelector('.img2') 

const grid3 = document.querySelector('.grid-project3')
const text3 = document.querySelector('.text3')
const img3 = document.querySelector('.img3') 

const grid4 = document.querySelector('.grid-project4')
const text4 = document.querySelector('.text4')
const img4 = document.querySelector('.img4') 
 

grid1.addEventListener('mouseenter',()=>{
    console.log('grid1 enter')
    text1.classList.add('display')
    img1.classList.add('opacity'); 
    img1.classList.add('scale')
})
grid1.addEventListener('mouseleave',()=>{
    console.log('grid1 leave')
    text1.classList.remove('display')
    img1.classList.remove('opacity'); 
    img1.classList.remove('scale') 
})



grid2.addEventListener('mouseenter',()=>{
    console.log('grid1 enter')
    text2.classList.add('display')
    img2.classList.add('opacity'); 
    img2.classList.add('scale')
})
grid2.addEventListener('mouseleave',()=>{
    console.log('grid1 leave')
    text2.classList.remove('display')
    img2.classList.remove('opacity'); 
    img2.classList.remove('scale') 
})
 


grid3.addEventListener('mouseenter',()=>{
    console.log('grid1 enter')
    text3.classList.add('display')
    img3.classList.add('opacity'); 
    img3.classList.add('scale')
})
grid3.addEventListener('mouseleave',()=>{
    console.log('grid1 leave')
    text3.classList.remove('display')
    img3.classList.remove('opacity'); 
    img3.classList.remove('scale') 
})


grid4.addEventListener('mouseenter',()=>{
    console.log('grid1 enter')
    text4.classList.add('display')
    img4.classList.add('opacity'); 
    img4.classList.add('scale')
})
grid4.addEventListener('mouseleave',()=>{
    console.log('grid1 leave')
    text4.classList.remove('display')
    img4.classList.remove('opacity'); 
    img4.classList.remove('scale') 
})
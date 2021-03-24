const grid1 = document.querySelector('.grid-project1')
const text1 = document.querySelector('.text1')
const img1 = document.querySelector('.img1') 
 
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
 
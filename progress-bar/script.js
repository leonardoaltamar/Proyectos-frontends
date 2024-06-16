const btnNext = document.getElementById('next');

const btnPrev = document.getElementById('prev');

const progressBar = document.getElementById('progressbar');

const items = document.querySelectorAll('.item');

items[0].classList.add('active')

const PERCENTAGE_WIDTH = 100/(items.length - 1);

let i = 1;
let width = 0;
btnNext.addEventListener('click', ()=> {    
    if(items[i]){
        width += PERCENTAGE_WIDTH;
        progressBar.style.width = `${width}%`
        i++;
        items[i-1].classList.add('active')

    }
})

btnPrev.addEventListener('click', ()=>{
    if(i > 1){
        width = Math.abs(width - PERCENTAGE_WIDTH);
        progressBar.style.width = `${width}%`
        items[i-1].classList.remove('active')
        i -= 1;
    }
    
})
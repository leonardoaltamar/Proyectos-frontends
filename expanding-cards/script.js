const cards = document.querySelectorAll('.card');

console.log(cards);

cards.forEach((element, index) => {
    element.addEventListener('click', () => {        
        removeClass();
        element.classList.add('active')
    });
});

const removeClass = () =>{
    cards.forEach(element => {
        element.classList.remove('active')
    })
}
// const startNumber = 4;

const flipCard = document.querySelector('.flip-card');

flip(flipCard);

// const countToDate = new Date('2022-12-02');
// let previousTimeBetweenDates;
// setInterval(()=>{
//     const currentDate = new Date();
//     const timeBetweenDate = Math.ceil((currentDate - countToDate)/1000);
//     if (previousTimeBetweenDates !== timeBetweenDate) {
//        flipAllCards(timeBetweenDate);
//     }
// }, 250);

// function flipAllCards (time) {

// }

const countDown = new Date('Dec 16, 2022 00:00:00').getTime();
let x = setInterval(()=>{
    let now = new Date().getTime();
    let countToDate = countDown - now;

    let days = Math.floor(countToDate/(1000 * 60 * 60 * 24));
    let hours = Math.floor((countToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((countToDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countToDate % (1000 * 60)) / 1000);




},1000);



function flip (flipCard){
    const topHalf = flipCard.querySelector('.top');
    const bottomHalf = flipCard.querySelector('.bottom');
    const topFlip = document.createElement('div')
    topFlip.classList.add('top-flip');
    const bottomFlip = document.createElement('div');
    bottomFlip.classList.add('bottom-flip');
    const startNumber = parseInt(topHalf.textContent);

    top.textContent = startNumber
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = startNumber - 1;

    topFlip.addEventListener('animationstart', e =>{
        topHalf.textContent = startNumber - 1;
    });
    topFlip.addEventListener('animationend', e =>{
        topFlip.remove();
    });
    bottomFlip.addEventListener('animationend', e =>{
        bottomHalf.textContent = startNumber - 1;
        bottomFlip.remove();
        // flip(flipCard);
    });
    flipCard.append(topFlip, bottomFlip);
}

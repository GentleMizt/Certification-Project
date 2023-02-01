// const startNumber = 4;

const flipCard = document.querySelector('.flip-card');


// const countToDate = new Date('2022-12-02');
const countDown = new Date('Dec 16, 2022 00:00:00').getTime();
let previousTimeBetweenDates;
setInterval(()=>{
    const currentDate = new Date();
    const timeBetweenDate = Math.ceil((countDown - currentDate) / 1000);
    flipAllCards(timeBetweenDate);
    previousTimeBetweenDates = timeBetweenDate;
}, 250);

function flipAllCards (countToDate) {
    let days = Math.floor(countToDate/(1000 * 60 * 60 * 24));
    let hours = Math.floor((countToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((countToDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countToDate % (1000 * 60)) / 1000);

    flip(document.querySelector('[data-days-tens]'), Math.floor(days / 10));
    flip(document.querySelector('[data-days-ones]'), days % 10);
    flip(document.querySelector('[data-hours-tens]'), Math.floor(hours / 10));
    flip(document.querySelector('[data-hours-ones]'), hours % 10);
    flip(document.querySelector('[data-minutes-tens]'), Math.floor(minutes / 10));
    flip(document.querySelector('[data-minutes-ones]'), minutes % 10);
    flip(document.querySelector('[data-seconds-tens]'), Math.floor(seconds / 10));
    flip(document.querySelector('[data-seconds-tens]'), seconds % 10);
}

// const countDown = new Date('Dec 16, 2022 00:00:00').getTime();
// let x = setInterval(()=>{
//     let now = new Date().getTime();
//     let countToDate = countDown - now;

//     let days = Math.floor(countToDate/(1000 * 60 * 60 * 24));
//     let hours = Math.floor((countToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((countToDate % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((countToDate % (1000 * 60)) / 1000);

    // document.querySelector('.days').innerHTML = days;
    // document.getElementsByClassName('hours').innerHTML = hours;
    // document.getElementsByClassName('minutes').innerHTML = minutes;
    // document.getElementsByClassName('seconds').innerHTML = seconds;



function flip (flipCard, newNumber){
    const topHalf = flipCard.querySelector('.top');
    const startNumber = parseInt(topHalf.textContent);
    if (newNumber === startNumber) return;

    const bottomHalf = flipCard.querySelector('.bottom');
    const topFlip = document.createElement('div')
    topFlip.classList.add('top-flip');
    const bottomFlip = document.createElement('div');
    bottomFlip.classList.add('bottom-flip');

    top.textContent = startNumber
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener('animationstart', e =>{
        topHalf.textContent = newNumber;
    });
    topFlip.addEventListener('animationend', e =>{
        topFlip.remove();
    });
    bottomFlip.addEventListener('animationend', e =>{
        bottomHalf.textContent = newNumber;
        bottomFlip.remove();
        // flip(flipCard);
    });
    flipCard.append(topFlip, bottomFlip);
}

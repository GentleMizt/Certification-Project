const currentNumber = 9;
const flipCard = document.querySelector('.flip-card');
const topHalf = flipCard.querySelector('.top');
const bottomHalf = flipCard.querySelector('.bottom');
const topFlip = document.createElement('div')
topFlip.classList.add('top-flip');
const bottomFlip = document.createElement('div')
bottomFlip.classList.add('bottom-flip');

top.textContent = currentNumber;
bottomHalf.textContent = currentNumber;

topFlip.textContent = currentNumber;
bottomFlip.textContent = currentNumber - 1;

topFlip.addEventListener('animationstart', e =>{
    topHalf.textContent = currentNumber - 1;
});
topFlip.addEventListener('animationend', e =>{
    topFlip.remove;
});
bottomFlip.addEventListener('animationend', e=>{
    bottomHalf.textContent = currentNumber - 1;
    bottomFlip.remove;
});

flipCard.append(topFlip, bottomFlip);
const currentNumber = 9;
const flipCard = document.querySelector('.flip-card');
const top = flipCard.querySelector('.top');
const bottom = flipCard.querySelector('.bottom');

top.textContent = currentNumber;
bottom.textContent = currentNumber;

flipCard.dataset.currentNumber = currentNumber;
flipCard.dataset.nextNumber = currentNumber - 1;
flipCard.classList.add('flip');
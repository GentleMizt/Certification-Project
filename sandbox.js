const currentNumber = 9;
const flipCard = document.querySelector('.flip-card');
[...flipCard.children].forEach(child => {
    child.textContent = currentNumber
});
flipCard.dataset.currentNumber = currentNumber;
flipCard.dataset.nextNumber = currentNumber - 1;
flipCard.classList.add('flip');
flipCard.addEventListener('transitionstart')
flipCard.addEventListener('transitionend')
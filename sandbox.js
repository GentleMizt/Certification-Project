const defNum = 9;
const flipCard = document.querySelector('.flip-card');
[...flipCard.children].forEach(child => {
    child.textContent = defNum
});
flipCard.dataset.currentNumber = defNum;
flipCard.dataset.nextNumber = defNum - 1;
flipCard.classList.add('flip');
flipCard.addEventListener('transitionstart')
flipCard.addEventListener('transitionend')
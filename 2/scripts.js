const increase = document.querySelector('#increase-btn');
const amount = document.querySelector('#amount');
const decrease = document.querySelector('#decrease-btn');

let count = 0;

amount.textContent = 0;

increase.addEventListener('click',(e) => {
    e.preventDefault();
    amount.textContent = count += 1
});

decrease.addEventListener('click',(e) => {
    e.preventDefault();
    amount.textContent = count -= 1
});

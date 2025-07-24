const increaseBtn = document.querySelector('#increase-btn');
const amount = document.querySelector('#amount');
const decreaseBtn = document.querySelector('#decrease-btn');
const resetBtn = document.querySelector('#rest-btn');

let count = 0;
function updateUI() {
    amount.textContent = count;
    decreaseBtn.disabled = count <= 0;
}

updateUI();


increaseBtn.addEventListener('click',(e) => {
    e.preventDefault();
    count += 1;
    updateUI();
});

decreaseBtn.addEventListener('click',(e) => {
    e.preventDefault();
    if(count > 0) {
        count -= 1;
        updateUI();
    }
});


resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    count = 0;
    updateUI();
})


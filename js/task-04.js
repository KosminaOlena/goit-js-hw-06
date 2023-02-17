const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', onBtnDecrement);
incrementBtn.addEventListener('click', onBtnIncrement);

function onBtnDecrement(event) {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
}
function onBtnIncrement(event) {
    counterValue += 1;
    valueSpan.textContent = counterValue;
}
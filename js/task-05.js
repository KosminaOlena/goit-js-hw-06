const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onOutputChange);

function onOutputChange(event) {
    event.currentTarget.value !== "" ?
        outputName.textContent = event.currentTarget.value :
        outputName.textContent = 'Anonymous';
}
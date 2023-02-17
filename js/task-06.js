const inputValidation = document.querySelector('#validation-input');

inputValidation.addEventListener('blur', onInputBlur);
inputValidation.addEventListener('focus', onInputFocus);

function onInputBlur(event) {
    inputValidation.value.length === Number(inputValidation.dataset.length) ?
        inputValidation.classList.add('valid') :
        inputValidation.classList.add('invalid');
}
function onInputFocus(event) {
    inputValidation.classList.remove('valid');
    inputValidation.classList.remove('invalid');
}
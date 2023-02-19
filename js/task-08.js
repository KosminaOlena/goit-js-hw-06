const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm (event) {
    event.preventDefault(); 
    const { email, password } = event.currentTarget.elements;
    if (!email.value || !password.value) {
        alert('Не всі поля заповнені :(');
    } else {
        const objSubmit = {
            email : email.value,
            password : password.value,
        }
        console.log(objSubmit);
        formRef.reset();     
    }
}
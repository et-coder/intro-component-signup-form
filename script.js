const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let pass;

const isValidEmail = (em) => {
    return emailRegex.test(em);
}

const setError = (element, message) => {
    element.nextElementSibling.classList.remove('hidden');
    element.parentElement.nextElementSibling.classList.remove('hidden');
    element.parentElement.nextElementSibling.textContent = message;
    pass = false
}

const setSuccess = (element) => {
    element.nextElementSibling.classList.add('hidden');
    element.parentElement.nextElementSibling.classList.add('hidden');
    pass = true;
}

function clearFields() {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';

}

document.querySelector('.button').addEventListener('click', (e) => {
    if (firstName.value === '') {
        setError(firstName, 'First Name cannot be empty');

    } else {
        setSuccess(firstName);
    }

    if (lastName.value === '') {
        setError(lastName, 'Last Name cannot be empty');
    } else {
        setSuccess(lastName);
    }

    if (email.value === '') {
        setError(email, 'Email cannot be empty')

    } else if (!isValidEmail(email.value)) {
        setError(email, 'Looks like this is not an email');
        console.log(isValidEmail(email));
    } else {
        setSuccess(email);
    }

    if (password.value === '') {
        setError(password, 'Password cannot be empty')
    } else if (password.value.length < 8) {
        setError(password, 'Password must be at least 8 character')
    } else {
        setSuccess(password);
    }

    if (pass) clearFields();
})
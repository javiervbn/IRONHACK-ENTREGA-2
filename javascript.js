function checkUsernameAvailability() {
    const username = document.getElementById('username').value;
    document.getElementById('usernameStatus').textContent = 'Checking...';
    setTimeout(() => {
        if (username === "userTaken") {
            document.getElementById('usernameStatus').textContent = 'Username taken';
        } else {
            document.getElementById('usernameStatus').textContent = 'Username available';
        }
    }, 500);
}

function validateName(fieldName) {
    const name = document.getElementById(fieldName).value;
    const regex = /^[A-Za-z\s]+$/;
    if (name.length >= 2 && regex.test(name)) {
        return true;
    } else {
        alert('Name must be at least two letters long and contain no numbers or special characters.');
        return false;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

function suggestCity() {
    console.log('City suggestions should appear as the user types.');
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const regex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[\W_]).{7,}$/;
    if (regex.test(password)) {
        return true;
    } else {
        alert('Password must be at least 7 characters long and include at least one number, one uppercase letter, and one special character.');
        return false;
    }
}

function matchPasswords() {
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;
    if (password === repeatPassword) {
        return true;
    } else {
        alert('Passwords do not match.');
        return false;
    }
}

function submitForm(event) {
    event.preventDefault(); 
    if (validateName('name') && validateName('surname') && validateEmail() && validatePassword() && matchPasswords()) {
        window.location.href = 'registration_confirmation.html';
    } else {
        alert('Please correct the errors before submitting.');
    }
}
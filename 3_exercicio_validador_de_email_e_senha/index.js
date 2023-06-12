function validateForm() {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('password-error');

    try {
        validateEmail(emailInput.value);
        emailError.textContent = '';

        validatePassword(passwordInput.value);
        passwordError.textContent = '';

        return true;
    } catch (error) {
        if (error.field === 'email') {
            emailError.textContent = error.message;
            passwordError.textContent = '';
        } else if (error.field === 'password') {
            passwordError.textContent = error.message;
            emailError.textContent = '';
        }

        return false;
    }
}

function validateEmail(email) {
    var emailRegex = /^[a-zA-Z0-9_]{2,}@[a-zA-Z0-9_]{2,}\.[a-zA-Z0-9_]{2,}$/;

    if (!emailRegex.test(email)) {
        throw new ValidationError('Email inválido.', 'email');
    }
}

function validatePassword(password) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
        throw new ValidationError('Senha inválida.', 'password');
    }
}

function ValidationError(message, field) {
    this.message = message;
    this.field = field;
}

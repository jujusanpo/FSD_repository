document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const queryString = new URLSearchParams(formData).toString();

    // Check if all required fields are filled
    if (!form.checkValidity()) {
        return;
    }

    // Redirect to confirmation page with form data
    window.location.href = `03confirm.html?${queryString}`;
});

const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');
const errorMessage = document.getElementById('password-error');

function validatePassword() {
    if (passwordField.value !== confirmPasswordField.value) {
        errorMessage.textContent = 'Passwords do not match';
    } else {
        errorMessage.textContent = '';
    }
}

passwordField.addEventListener('input', validatePassword);
confirmPasswordField.addEventListener('input', validatePassword);

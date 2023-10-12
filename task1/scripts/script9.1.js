const form = document.getElementById("sample-form");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Reset validation messages and styles
    resultDiv.innerHTML = "";
    resetInputStyles();

    // Validate Text Input
    const textInput = document.getElementById("text-input");
    if (textInput.value.trim() === "") {
        displayError(textInput, "Text Input is required.");
    }

    // Validate Number Input
    const numberInput = document.getElementById("number-input");
    if (isNaN(numberInput.value) || numberInput.value < 0) {
        displayError(numberInput, "Please enter a valid positive number.");
    }

    // Validate Date Input
    const dateInput = document.getElementById("date-input");
    if (dateInput.value === "") {
        displayError(dateInput, "Date Input is required.");
    }

    // Validate Email Input
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailInput = document.getElementById("email-input");
    if (!emailPattern.test(emailInput.value)) {
        displayError(emailInput, "Please enter a valid email address.");
    }

    // Validate Password
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordInput = document.getElementById("password-input");
    if (!passwordPattern.test(passwordInput.value)) {
        displayError(passwordInput, "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.");
    }

    // Validate Password Repeat
    const passwordRepeatInput = document.getElementById("password-repeat");
    if (passwordInput.value !== passwordRepeatInput.value) {
        displayError(passwordRepeatInput, "Passwords do not match.");
    }

    if (resultDiv.innerHTML === "") {
        resultDiv.innerHTML = "Form submitted successfully!";
        resultDiv.className = "success-message";
    }
});

function resetInputStyles() {
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
        input.classList.remove("error", "success");
    });
}

function displayError(input, message) {
    input.classList.add("error");
    resultDiv.innerHTML = message;
    resultDiv.className = "error-message";
}
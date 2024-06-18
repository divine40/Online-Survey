document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Age validation
    const age = document.getElementById('age').value;
    if (!/^(?:1[89]|[2-9]\d|100)$/.test(age)) {
        document.getElementById('ageError').innerText = "Age must be between 18 and 100.";
        isValid = false;
    } else {
        document.getElementById('ageError').innerText = "";
    }

    // Email validation
    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').innerText = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = "";
    }

    // Feedback validation
    const feedback = document.getElementById('feedback').value;
    if (/[^a-zA-Z0-9\s]/.test(feedback)) {
        document.getElementById('feedbackError').innerText = "Feedback cannot contain special characters.";
        isValid = false;
    } else {
        document.getElementById('feedbackError').innerText = "";
    }

    // Rating validation
    const rating = document.getElementById('rating').value;
    if (!/^[1-5]$/.test(rating)) {
        document.getElementById('ratingError').innerText = "Rating must be between 1 and 5.";
        isValid = false;
    } else {
        document.getElementById('ratingError').innerText = "";
    }

    // Date validation
    const date = document.getElementById('date').value;
    if (!/^\d{2}-\d{2}-\d{4}$/.test(date)) {
        document.getElementById('dateError').innerText = "Date must be in DD-MM-YYYY format.";
        isValid = false;
    } else {
        const parts = date.split('-');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);
        const dateObj = new Date(year, month - 1, day);
        if (dateObj.getFullYear() !== year || dateObj.getMonth() + 1 !== month || dateObj.getDate() !== day) {
            document.getElementById('dateError').innerText = "Invalid date.";
            isValid = false;
        } else {
            document.getElementById('dateError').innerText = "";
        }
    }

    // Submit the form if valid
    if (isValid) {
        alert("Form submitted successfully!");
        // Here you can add the code to actually submit the form data.
    }
});


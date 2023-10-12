function validateForm() {
    // Check if all fields are filled out
    const form = document.getElementById("surveyForm");
    if (!form.checkValidity()) {
        form.reportValidity();
        return false;
    }

    // Retrieve form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(input => input.value);
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Display values in a popup
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popupContent");
    popup.style.display = "block";
    popupContent.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender.join(", ")}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;
    form.reset();

    return false;
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

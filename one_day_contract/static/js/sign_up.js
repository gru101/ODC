
const form = document.querySelector(".signup-form");
const submitButton = document.querySelector("button");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting initially

    // Fetch updated values
    const pass1 = document.querySelector("#password").value;
    const pass2 = document.querySelector("#confirm_password").value;
    const roleElement = document.querySelector("#Role");
    const role = roleElement.value;

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach((msg) => msg.remove());

    let hasError = false;

    // Password validation
    if (pass1 !== pass2) {
        const message = document.createElement("p");
        message.textContent = "Passwords do not match! Re-enter Confirm Password.";
        message.classList.add("error-message");
        const confirmPasswordField = document.querySelector("#confirm_password");
        confirmPasswordField.insertAdjacentElement("beforebegin", message); // Append the error message
        confirmPasswordField.value = ""; // Clear confirm password field
        hasError = true;
    }

    // Role validation
    if(role === "Select Role") {
        const roleError = document.createElement("p");
        roleError.textContent = "Please select a role.";
        roleError.style.color = "red";
        roleError.classList.add("error-message");
        roleElement.insertAdjacentElement("beforebegin", roleError); // Add error message near dropdown
        hasError = true;
    }
    // If no errors, submit the form
    if (!hasError) {
        form.submit();
    }
});


document.addEventListener("DOMContentLoaded", () => {
    
    const roleElement = document.querySelector("#Role");
    const label = document.querySelector("#org_name_label");
    const input = document.querySelector("#org_name");

    roleElement.addEventListener("change", () => {
        if (roleElement.value === "Manager") {
            label.classList.remove("hidden");
            input.classList.remove("hidden");
            input.setAttribute("required", true)

        } else {
            label.classList.add("hidden");
            input.classList.add("hidden");
        }
    });
});


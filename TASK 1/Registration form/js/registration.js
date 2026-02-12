let nameRegex = /^[A-Za-z]+$/;
let numberRegex = /^[0-9]+$/;

window.onload = function() {
    let dob = document.getElementById("dob");

    let today = new Date();
    let maxDate = today.toISOString().split("T")[0];

    dob.setAttribute("min", "1900-01-01");
    dob.setAttribute("max", maxDate);
};

function validateFirstName() {
    let fname = document.getElementById("fname").value.trim();
    let error = document.getElementById("fnameError");

    if (fname === "") {
        error.innerText = "This field is mandatory";
        return false;
    }
    if (!nameRegex.test(fname)) {
        error.innerText = "Only alphabets allowed";
        return false;
    }
    error.innerText = "";
    return true;
}

function validateLastName() {

    if (!validateFirstName()) return false;

    let lname = document.getElementById("lname").value.trim();
    let error = document.getElementById("lnameError");

    if (lname === "") {
        error.innerText = "This field is mandatory";
        return false;
    }
    if (!nameRegex.test(lname)) {
        error.innerText = "Only alphabets allowed";
        return false;
    }
    error.innerText = "";
    return true;
}

function validateContact() {
    let contact = document.getElementById("contact").value.trim();
    let error = document.getElementById("contactError");

    if (contact === "") {
        error.innerText = "This field is mandatory";
        return false;
    }
    if (!numberRegex.test(contact)) {
        error.innerText = "Only numbers allowed";
        return false;
    }
    error.innerText = "";
    return true;
}

function validateMandatory() {

    let valid = true;

    let fields = ["email","password","dob","gender"];
    fields.forEach(function(id){
        let value = document.getElementById(id).value.trim();
        let error = document.getElementById(id + "Error");

        if (value === "") {
            error.innerText = "This field is mandatory";
            valid = false;
        } else {
            error.innerText = "";
        }
    });

    return valid;
}

function submitForm() {

    let valid =
        validateFirstName() &&
        validateLastName() &&
        validateContact() &&
        validateMandatory();

    if (!valid) return false;

    alert("You cannot edit this form again. Please enter correct details");

    document.getElementById("regForm").reset();
    return false; 
}


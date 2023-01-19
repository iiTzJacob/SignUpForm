const firstPassword = document.getElementById("password");
const confirm = document.getElementById("confirm_password");

function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    if (password != confirmPassword) {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirm_password").style.borderColor = "red";
    } else {
        document.getElementById("password").style.borderColor = "blue";
        document.getElementById("confirm_password").style.borderColor = "blue";
    }
}

firstPassword.addEventListener("change", checkPasswordMatch);
confirm.addEventListener("change", checkPasswordMatch)
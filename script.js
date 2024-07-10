function generatePassword() {
    var length = document.getElementById("passwordLength").value;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("passwordOutput").value = password;
}

function copyPassword() {
    var passwordOutput = document.getElementById("passwordOutput");
    passwordOutput.select();
    passwordOutput.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    alert("Copied the password: " + passwordOutput.value);
}

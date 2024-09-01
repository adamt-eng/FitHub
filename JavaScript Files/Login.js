document.addEventListener('DOMContentLoaded', function ()
{
    if (localStorage.getItem('isLoggedIn') !== null) {
        window.location.href = 'Home.html';
    }
});

function authenticate() {
    var errorMessage = document.getElementById("error-message");

    errorMessage.style.display = "none";

    var Username = document.getElementById("username").value;
    var Password = document.getElementById("password").value;

    if (Username == "") {
        errorMessage.innerText = "Username cannot be left empty";
        errorMessage.style.display = "block";
    }
    else {
        if (Password == "") {
            errorMessage.innerText = "Password cannot be left empty";
            errorMessage.style.display = "block";
        }
        else {
            var FoundUsername = false;

            for (const key in localStorage) {
                if (key.startsWith("Username_")) {
                    if (localStorage.getItem(key) == Username) {
                        FoundUsername = true;

                        if (localStorage.getItem(key.replace("Username_", "Password_")) == Password) {
                            localStorage.setItem('isLoggedIn', key);
                            window.location.href = 'Home.html';
                        }
                        else {
                            errorMessage.innerText = "Incorrect Username or Password";
                            errorMessage.style.display = "block";
                        }
                    }
                }
            }

            if (!FoundUsername) {
                errorMessage.innerText = "Incorrect Username or Password";
                errorMessage.style.display = "block";
            }
        }
    }
}
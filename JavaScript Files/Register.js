function register() {
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
                        errorMessage.innerText = "An account already exists with this username";
                        errorMessage.style.display = "block";
                    }
                }
            }

            if (!FoundUsername) {
                var index = 0;

                while (localStorage.getItem(`Username_${index}`) !== null) {
                    index++;
                }

                localStorage.setItem(`Username_${index}`, Username);
                localStorage.setItem(`Password_${index}`, Password);

                window.location.href = 'Login.html';
            }
        }
    }
}
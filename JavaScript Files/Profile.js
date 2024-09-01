function logout()
{
    localStorage.removeItem("isLoggedIn");
    window.location.href = 'Home.html';
}

function delete_account()
{
    localStorage.removeItem(localStorage.getItem("isLoggedIn"));
    localStorage.removeItem(localStorage.getItem("isLoggedIn").replace("Username_", "H_"));
    localStorage.removeItem(localStorage.getItem("isLoggedIn").replace("Username_", "W_"));
    localStorage.removeItem(localStorage.getItem("isLoggedIn").replace("Username_", "BMI_"));
    localStorage.removeItem(localStorage.getItem("isLoggedIn").replace("Username_", "Password_"));
    localStorage.removeItem("isLoggedIn");
    window.location.href = 'Home.html';
}

document.addEventListener('DOMContentLoaded', function ()
{
    document.getElementById('profile').style.display = "inline-block";

    var isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn == null)
    {
        window.location.href = 'Home.html';
    }
    else
    {
        document.getElementById('usernameCell').textContent = localStorage.getItem(isLoggedIn);
        document.getElementById('heightCell').textContent = localStorage.getItem(localStorage.getItem('isLoggedIn').replace("Username_", "H_")) || "N/A";
        document.getElementById('weightCell').textContent = localStorage.getItem(localStorage.getItem('isLoggedIn').replace("Username_", "W_")) || "N/A";
        document.getElementById('bmiCell').textContent = localStorage.getItem(localStorage.getItem('isLoggedIn').replace("Username_", "BMI_")) || "N/A";
    }
});
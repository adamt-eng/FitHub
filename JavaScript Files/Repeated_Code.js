document.addEventListener('DOMContentLoaded', function ()
{
    if (localStorage.getItem('isLoggedIn') !== null)
    {
        document.getElementById('profile').style.display = "inline-block";
        document.getElementById('workout').style.display = "inline-block";
        document.getElementById('healthyrecipes').style.display = "inline-block";
        document.getElementById('bmicalculator').style.display = "inline-block";  }
    else
    {
        document.getElementById('login').style.display = "inline-block";
        document.getElementById('register').style.display = "inline-block";
    }
});

function toggleMenu()
{
    document.querySelector('.toggleMenu').classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('active');
}
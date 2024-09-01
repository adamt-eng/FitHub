document.addEventListener('DOMContentLoaded', function ()
{
    if (localStorage.getItem('isLoggedIn') !== null)
    {
        document.getElementById("started").textContent = "Start Working Out Now!";
        document.getElementById("started").href = "Workout.html";
      }
});
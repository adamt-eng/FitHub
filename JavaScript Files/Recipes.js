document.addEventListener('DOMContentLoaded', function ()
{
    document.body.style.background = "url('../Images/image.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
});

function displayIngredients()
{
    let ingredientList = "";

    for (var i = 0; i < ingredients.length; i++)
    {
        ingredientList += `<li>${ingredients[i]}</li>`;
    }

    document.querySelector('.ingredients-list').innerHTML = ingredientList;
}

function displayRecipeSteps()
{
    let recipeStepsList = "<ol>";

    for (var i = 0; i < recipeSteps.length; i++)
    {
        recipeStepsList += `<li>${recipeSteps[i]}</li>`;
    }

    recipeStepsList += "</ol>";

    document.querySelector('.recipe-steps').innerHTML = recipeStepsList;
}
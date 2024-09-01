function calculateBMI() {
    var Result = document.getElementById("result");

    if (document.getElementById("weight").value != "")
    {
        if (!isNaN(document.getElementById("weight").value)) {
            if (document.getElementById("height").value != "") {
                if (!isNaN(document.getElementById("height").value)) {
                    var Weight = parseFloat(document.getElementById("weight").value);
                    var Height = parseFloat(document.getElementById("height").value) / 100;

                    if (Weight <= 0 || Height <= 0) {
                        Result.innerHTML = "Please enter valid weight and height values.";
                        return;
                    }

                    var BMI = Weight / (Height * Height);

                    if (localStorage.getItem('isLoggedIn') !== null) {
                        localStorage.setItem(localStorage.getItem('isLoggedIn').replace("Username_", "BMI_"), BMI.toFixed(2));
                        localStorage.setItem(localStorage.getItem('isLoggedIn').replace("Username_", "H_"), Height * 100);
                        localStorage.setItem(localStorage.getItem('isLoggedIn').replace("Username_", "W_"), Weight);
                    }

                    Result.innerHTML = "Your BMI is: " + BMI.toFixed(2);

                    var Tip = "";
                    if (BMI < 18.5) Tip = "You are underweight. Consider consulting a nutritionist for a balanced diet plan.";
                    else if (BMI >= 18.5 && BMI < 24.9) Tip = "You have a healthy weight. Keep up the good work!";
                    else if (BMI >= 25 && BMI < 29.9) Tip = "You are overweight. Try to incorporate more exercise and reduce calorie intake.";
                    else Tip = "You are obese. It's important to consult a healthcare professional for personalized advice and support.";
                    document.getElementById("bmi-note").textContent = Tip;
                }
                else
                {
                    Result.innerHTML = "Height must be a digit";
                    document.getElementById("bmi-note").textContent = "";
                    return;
                }
            }
            else
            {
                Result.innerHTML = "Height cannot be left empty";
                document.getElementById("bmi-note").textContent = "";
                return;
            }
        }
        else 
        {
            Result.innerHTML = "Weight must be a digit";
            document.getElementById("bmi-note").textContent = "";
            return;
        }
    }
    else
    {
        Result.innerHTML = "Weight cannot be left empty";
        document.getElementById("bmi-note").textContent = "";
        return;
    }
}
document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    
    const bmi = weight/(height/100)**2;
    
    const category = getBMICategory(bmi);
    
    document.querySelector('.result').innerHTML = `
    <p>BMI is: ${bmi}</p>
    <p>BMI Category is: ${category}</p>
    `;
    
    function getBMICategory (bmi) {
        if (bmi <= 18.5) {
            return "Underweight";
        } else if (bmi <= 24.9) {
            return "Normal weight";
        } else if (bmi <= 29.9) {
            return "Over weight";
        } else {
            return "Obesity";
        }
    }
});
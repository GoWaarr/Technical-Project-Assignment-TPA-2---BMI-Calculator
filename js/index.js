function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bmi = weight / ((height/100) **2);
    document.getElementById('bmi').value = bmi.toFixed(1);
    let status = '';
    if(bmi < 18.5) {
        status = 'Underweight';
    } else if (bmi < 25) {
        status = 'Normal';
    } else if (bmi < 30) {
        status = 'Overweight';
    } else {
        status = 'Obesity';
    }
    document.getElementById('status').value = status;
}
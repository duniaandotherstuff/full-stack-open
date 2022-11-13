const calculateBmi = (height: number, weight: number): string => {
    const meters: number = height / 100;
    const bmi: number = weight / Math.pow(meters, 2);
    if (bmi < 18.5) return "Underweight";
    else if (bmi < 25) return "Normal";
    else if (bmi < 30) return "Overweight";
    else return "Obese";
}

console.log(calculateBmi(190, 85));
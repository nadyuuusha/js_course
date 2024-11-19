const calculate = (number) => {
    let guess = number / 2; 
    const tolerance = 0.0001; 

    while (Math.abs(guess * guess - number) > tolerance) {
        guess = (guess + number / guess) / 2; 
    }

    return guess;
};
const main = () => {
    const number = parseFloat(document.getElementById("number").value); 
    if (isNaN(number) || number <= 0) {
        document.getElementById("result").textContent = "Пожалуйста, введите положительное число.";
    } else {
        const result = calculate(number); 
        document.getElementById("result").textContent = `Квадратный корень числа ${number} равен ${result}.`;
    }
};

document.getElementById("calculate").addEventListener("click", main);
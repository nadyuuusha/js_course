document.getElementById("submit").addEventListener("click", function() {

    let input = document.getElementById("numbersInput").value;
    let numbers = input.split(" ").map(Number); 

    
    let maxNumber = Math.max(...numbers);
    
    let countMax = numbers.filter(num => num === maxNumber).length;

    document.getElementById("result").textContent = `Число ${maxNumber} встречается ${countMax} раз.`;
});
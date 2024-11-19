document.getElementById("submit").addEventListener("click", function() {
    let input = document.getElementById("numbersInput").value;
    let numbers = input.split(" ").map(Number); 

    numbers.sort((a, b) => a - b);

    let median;
    let middle = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        // Если количество чисел четное
        median = (numbers[middle - 1] + numbers[middle]) / 2;
    } else {
        // Если количество чисел нечетное
        median = numbers[middle];
    }

    // Выводим результат
    document.getElementById("result").textContent = `Медиана: ${median}`;
});
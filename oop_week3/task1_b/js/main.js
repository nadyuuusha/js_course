const calculate = (input) => {
    const freq = {};
    const length = input.length;

    for (const char of input) {
        freq[char] = (freq[char] || 0) + 1;
    }

    let entropy = 0;
    for (const char in freq) {
        const p = freq[char] / length; 
        entropy -= p * Math.log2(p); 
    }
    return entropy.toFixed(2);
};

const main = () => {
    const input = document.getElementById("input").value.trim();
    const resultElement = document.getElementById("result");

    if (!input) {
        resultElement.textContent = "Пожалуйста, введите текст.";
        return;
    }

    const entropy = calculate(input);
    resultElement.textContent = `Энтропия по Шеннону: ${entropy}`;
};

// Привязка кнопки
document.getElementById("calculateBtn").addEventListener("click", main);
const main = () => {
    const n = parseInt(document.getElementById("number").value);  
    const resultElement = document.getElementById("result");

    if (isNaN(n) || n <= 1) {
        resultElement.textContent = "Введите число больше 1";
        return;
    }

    let simp = [];

    for (let i = 2; i <= n; i++) {
        let isSimp = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isSimp = false;
                break;
            }
        }

        if (isSimp) {
            simp.push(i);
        }
    }

    resultElement.textContent = `Простые числа от 1 до ${n}: ${simp.join(", ")}`;
};

document.getElementById("calculate").addEventListener("click", main);
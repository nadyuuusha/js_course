// Функция обработки строки
const calculate = (input) => {
    const data = input.split("@");
    const sensor = {};

    data.forEach((entry) => {
        if (entry.length >= 3) {
            const id = entry.slice(0, 2); // ID датчика
            const temp = parseInt(entry.slice(2)); // Температура

            if (!isNaN(temp)) {
                if (!sensor[id]) {
                    sensor[id] = [];
                }
                sensor[id].push(temp);
            }
        }
    });

    const result = Object.entries(sensor).map(([id, temps]) => {
        const average =
            temps.reduce((sum, temp) => sum + temp, 0) / temps.length;
        return { id: parseInt(id), average: parseFloat(average.toFixed(1)) };
    });

    return result;
};

const main = () => {
    const input = document.getElementById("sensorData").value.trim();
    const sortBy = document.getElementById("sortBy").value;
    const resultElement = document.getElementById("result");

    let results = calculate(input);

    if (sortBy === "id") {
        results.sort((a, b) => a.id - b.id);
    } else if (sortBy === "temperature") {
        results.sort((a, b) => a.average - b.average);
    }

    const output = results
        .map((result) => `${result.id}@${result.average}`)
        .join("\n");
    resultElement.textContent = output;
};

document.getElementById("processButton").addEventListener("click", main);
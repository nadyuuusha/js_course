const main = () => {
    let day = document.getElementById("day").value;
    let temp = document.getElementById("temp").value;
    let precipitation = document.getElementById("precipitation").value;
    let wind = document.getElementById("wind").value;
    let humidity = document.getElementById("humidity").value;
    
    let summary = document.getElementById("summary");

    let result = decision(day, temp, precipitation, wind, humidity);

    summary.innerHTML = result;
};

const decision = (day, temp, precipitation, wind, humidity) => {
    if (day === "sunday" && temp === "warm" && precipitation !== "rain" && precipitation !== "snow" && precipitation !== "hail" && wind !== "windy" && humidity !== "humi-high") {
        return "Да"; 
    } else {
        return "Нет"; 
    }
};

document.getElementById("submit").addEventListener("click", main);
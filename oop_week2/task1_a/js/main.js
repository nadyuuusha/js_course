const getAge = (age) => {
    if (age % 100 >= 11 && age % 100 <= 14) {
        return age + " лет";
    } else if (age % 10 === 1) {
        return age + " год";
    } else if (age % 10 >= 2 && age % 10 <= 4) {
        return age + " года";
    } else {
        return age + " лет";
    }
};

const display = () => {
    const age = parseInt(document.getElementById("age").value, 10); 
    const pElement = document.getElementById("p"); 
    pElement.textContent = getAge(age); 
};

document.getElementById("button").addEventListener("click", display);
// Функция для расчета количества дней в месяце
const getDays = (month, year) => {
    // февраль
    if (month === 2) {
        return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
    }
    // 31 день
    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
        return 31;
    }
    // 30 дней
    if ([4, 6, 9, 11].includes(month)) {
        return 30;
    }
    // месяц некорректен
    return null;
};

const display = () => {
    const month = parseInt(document.getElementById("month").value, 10); 
    const year = new Date().getFullYear(); 
    const pElement = document.getElementById("p-tag"); 

    const days = getDays(month, year); 

    if (days) {
        pElement.textContent = `В ${month} месяце ${days} дней.`;    
    } else {
        pElement.textContent = "Введите корректный номер месяца (1-12).";
      
    }
};
document.getElementById("button").addEventListener("click", display);
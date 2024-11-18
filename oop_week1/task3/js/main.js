// функция для вычисления объема икосаэдра по длине ребра
const calculate = (len) => {
    return (5 * Math.pow(len, 3) * (3 + Math.sqrt(5))) / 12;
  };
  
  // функция для ввода/вывода значений
  const main = () => {
    let length = document.getElementById("length").value; // получение длины ребра из input
    let result = document.getElementById("result"); // получение id для вывода результата
    let volume = calculate(length); // вычисление объема
    result.innerHTML = volume.toFixed(3); // отображаем результат с округлением до 3 знаков после запятой
    
  };
  
  // вызываем функцию ввода/вывода с помощью кнопки
  document.getElementById("submit").addEventListener("click", main);
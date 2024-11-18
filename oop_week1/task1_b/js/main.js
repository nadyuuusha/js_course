const main = () => { // объявление функции 
    let hello_p = document.getElementById('hello_p'); // обозначение тега greeting по его айди
    let user_name = document.getElementById('user_name').value; // Получение значения из input
    return hello_p.innerHTML = 'Привет, ' + user_name + '!'; // Изменение содержимого заданного тега greeting
}
document.getElementById('button').addEventListener('click',main) // Ожидание нажатия кнопки, при нажатии запуск функции main
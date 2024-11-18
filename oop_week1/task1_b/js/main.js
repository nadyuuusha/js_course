const main = () => { // объявление функции 
    let hello_p = document.getElementById('hello_p'); // обозначение тега greeting по его айди
    let user_name = document.getElementById('user_name').value; // получение значения из input
    return hello_p.innerHTML = 'Привет, ' + user_name + '!'; 
}
document.getElementById('button').addEventListener('click',main) //  запуск функции main при нажатии на кнопку

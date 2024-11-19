document.getElementById("submit").addEventListener("click", function() {
    let height = parseInt(document.getElementById("number").value); // Получаем высоту
    let canvas = document.getElementById("pyramidCanvas");
    let ctx = canvas.getContext("2d");
    let squareSize = 10; // Размер блока
    let gap = 5; // Промежуток между блоками
  
    // Вычисляем необходимую ширину канваса для отображения пирамиды
    let canvasWidth = 2 * height * (squareSize + gap); // Ширина канваса для высоты
  
    // Устанавливаем размер канваса
    canvas.width = canvasWidth;
    canvas.height = height * (squareSize + gap); // Высота канваса
  
    // Очищаем холст перед рисованием
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Рисуем пирамиду
    for (let row = 0; row < height; row++) {
      let numBlocks = 2 * (row + 1); // Количество блоков в строке
      let offset = (canvas.width - (numBlocks * squareSize + (numBlocks - 1) * gap)) / 2; // Вычисляем отступ для центровки
  
      for (let col = 0; col < numBlocks; col++) {
        let x = offset + col * (squareSize + gap); // X-координата для блока
        let y = row * (squareSize + gap); // Y-координата для блока
  
        ctx.fillStyle = "red"; // Цвет блока
        ctx.fillRect(x, y, squareSize, squareSize); // Рисуем блок
      }
    }
  });
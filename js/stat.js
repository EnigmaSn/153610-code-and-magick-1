window.renderStatistics = function (ctx, names, times) {
  // подложка
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  // окно
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  console.log('прямоугольники отрисовались');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 235, 25);
  ctx.fillText('Список результатов:', 235, 40);
  console.log('текст отрисовался');

  var max = -1;
  var maxIndex = -1;

  var getMaxElement = function (arr) {
    for (var i = 0 ; i < arr.length; i++) {
      var arrEl = arr[i];
      if (arrEl > max) {
        max = arrEl;
        maxIndex = i;
      }
    }
    return max;
  };

  // находим максимальное время
  getMaxElement(times);

  // гистограмма
  var histogramHeight = 150;              // px;
  //ноль вычитается чтобы начиналось с ноля
  var step = histogramHeight / (max - 0); // px;

  ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 80);

  var barWidth = 40; // ширина столбца
  var indent = 50;  // расстояние между колонками
  var initialX = 120;
  var initialY = 250;
  var lineHeight = 15; // высота колонки

  for (var j = 0; j < times.length; j++) {
    // ctx.fillRect(initialX, initialY + indent * j, times[j] * step, barWidth);
    // ctx.fillText(names[j], initialX + histogramHeight, initialY + lineHeight + indent * j);
    // столбцы
    ctx.fillRect(initialX + indent * j, initialY, barWidth, times[j] * step - histogramHeight);
    // имена
    //ctx.fillText();

  }
};

// После сообщения о победе должна располагаться гистограмма времен участников. Параметры гистограммы следующие:

// Высота гистограммы 150px.
//   Ширина колонки 40px.
//   Расстояние между колонками 50px.
//   Цвет колонки игрока Вы rgba(255, 0, 0, 1).

// Цвета колонок других игроков — синие, а прозрачность задается случайным образом.
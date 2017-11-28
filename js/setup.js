'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var firstName = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var lastName = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var wizardName = [];


for (var i = 0; i < lastName.length; i++) {
  var newName = firstName[i] + ' ' + lastName[i];
  wizardName.push(newName);
}
console.log('Полные имена: ' + wizardName);

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var arr = [name, coatColor, eyesColor];

// На основе данных, созданных в предыдущем пункте и шаблона #similar-wizard-template создайте DOM-элементы, соответствующие случайно сгенерированным волшебникам и заполните их данными из массива:
//
//   Имя персонажа name запишите как текст в блок .setup-similar-label
// Цвет мантии coatColor задайте как цвет заливки fill в стилях элемента .wizard-coat
// Цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента .wizard-eyes
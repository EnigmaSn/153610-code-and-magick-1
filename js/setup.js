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
var wizardsNames = [];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var name;
var coatColor;
var eyesColor;
//var arr = [name, coatColor, eyesColor];

function getRandomElement(min, max) {
  var randomElement = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomElement;
}


for (var i = 0; i < firstName.length; i++) {
  var newName = firstName[i] + ' ' + lastName[i];
  wizardsNames.push(newName);

  //тут вывести рандомные функции
  var randomWizard = getRandomElement(0, wizardsNames.length - 1);
  var randomCoatColor = getRandomElement(0, coatColors.length - 1);
  var randomEyesColor = getRandomElement(0, eyesColors.length - 1);

  name = wizardsNames[randomWizard];
  coatColor = coatColors[randomCoatColor];
  eyesColor = eyesColors[randomEyesColor];

  console.log('Полное именя: ' + name);
  console.log('Цвет пальто: ' + coatColor);
  console.log('Цвет глаз: ' + eyesColor);
}


// На основе данных, созданных в предыдущем пункте и шаблона #similar-wizard-template создайте DOM-элементы, соответствующие случайно сгенерированным волшебникам и заполните их данными из массива:
//
//   Имя персонажа name запишите как текст в блок .setup-similar-label
// Цвет мантии coatColor задайте как цвет заливки fill в стилях элемента .wizard-coat
// Цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента .wizard-eyes
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
var similarWizards = [];

function getRandomElement(min, max) {
  var randomElement = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomElement;
}

var similar = document.querySelector('.setup-similar');
similar.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
//console.log(similarWizardTemplate);

var randomArr = [];

for (var i = 0; i < 4; i++) {
  var getRandom = getRandomElement(0, lastName.length - 1);
  console.log(getRandom);

  for (var j = 0; j < randomArr.length; j++) {
    if (randomArr[i] === getRandom) {
      getRandom += 1;
    }
  }
  randomArr.push(getRandom);


  var newName = firstName[getRandom] + ' ' + lastName[getRandom];
  wizardsNames.push(newName);

  //тут вывести рандомные функции
  var getRandomName = getRandomElement(0, wizardsNames.length - 1);
  var getRandomCoatColor = getRandomElement(0, coatColors.length - 1);
  var getRandomEyesColor = getRandomElement(0, eyesColors.length - 1);

  var randomName = wizardsNames[getRandomName];
  var randomCoatColor = coatColors[getRandomCoatColor];
  var randomEyesColor = eyesColors[getRandomEyesColor];

  console.log('Волшебник ' + i);
  console.log('Полное имя: ' + randomName);
  console.log('Цвет пальто: ' + randomCoatColor);
  console.log('Цвет глаз: ' + randomEyesColor);

  var wizardElement = similarWizardTemplate.cloneNode(true); // глубокое клонирование
  //console.log(wizardElement);
  similarListElement.appendChild(wizardElement);

  var wizardName = document.querySelectorAll('.setup-similar-label');
  var wizardCoat = document.querySelectorAll('.wizard-coat');
  var wizardEyes = document.querySelectorAll('.wizard-eyes');

  wizardName[i].textContent = randomName;
  wizardCoat[i].style.fill = randomCoatColor;
  wizardEyes[i].style.fill = randomEyesColor;
}
console.log(randomArr);

// На основе данных, созданных в предыдущем пункте и шаблона #similar-wizard-template создайте DOM-элементы, соответствующие случайно сгенерированным волшебникам и заполните их данными из массива:
//
//   Имя персонажа name запишите как текст в блок .setup-similar-label
// Цвет мантии coatColor задайте как цвет заливки fill в стилях элемента .wizard-coat
// Цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента .wizard-eyes

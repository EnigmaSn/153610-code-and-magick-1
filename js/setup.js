'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var firstNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var lastNames = [
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

var wizard = {
  name: '',
  coatColor: '',
  eyesColor: ''
};
var similar = document.querySelector('.setup-similar');
similar.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

//функция для поиска рандомного значения с заданным max (длина массива)
function getRandomValue(max) {
  return parseInt(Math.random() * max, 10);
}

//сложение имени и фамилии в случайном порядке
for (var j = 0; j < firstNames.length; j++) {
  var getRandomFirstName = getRandomValue(firstNames.length);
  var getRandomLastName = getRandomValue(lastNames.length);
  var fullName = firstNames[getRandomFirstName] + ' ' + lastNames[getRandomLastName];
  wizardsNames.push(fullName);
}

var randomWizard = function() {
  // тут вывести рандомные функции
  var getRandomName = getRandomValue(wizardsNames.length);
  var getRandomCoatColor = getRandomValue(coatColors.length);
  var getRandomEyesColor = getRandomValue(eyesColors.length);

  var randomName = wizardsNames[getRandomName];
  var randomCoatColor = coatColors[getRandomCoatColor];
  var randomEyesColor = eyesColors[getRandomEyesColor];

  var similarWizard = {
    name: randomName,
    coatColor: randomCoatColor,
    eyesColor: randomEyesColor
  };

  return similarWizard;
};
//создать массив волшебников
//функцию заполнения блока DOM-элементами на основе массива JS-объектов.
for (var i = 0; i < 4; i++) {

  var newWizard = randomWizard();

  console.log('Волшебник ' + i);
  console.log('Полное имя: ' + newWizard.name);
  console.log('Цвет пальто: ' + newWizard.coatColor);
  console.log('Цвет глаз: ' + newWizard.eyesColor);

  // копируем шаблон
  var wizardElement = similarWizardTemplate.cloneNode(true); // глубокое клонирование
  //вставляем в список волшебников
  similarListElement.appendChild(wizardElement);

  var wizardName = document.querySelectorAll('.setup-similar-label');
  var wizardCoat = document.querySelectorAll('.wizard-coat');
  var wizardEyes = document.querySelectorAll('.wizard-eyes');

  wizardName[i].textContent = newWizard.name;
  wizardCoat[i].style.fill = newWizard.coatColor;
  wizardEyes[i].style.fill = newWizard.eyesColor;
}

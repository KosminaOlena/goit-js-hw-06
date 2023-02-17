function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція.Натисненням на кнопку Очистити,
//     колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
//  Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const inputControl = document.querySelector('#controls > input');
const divContainer = document.querySelector('#boxes');

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', resetBoxes);

divContainer.style.display = "flex";
divContainer.style.justifyContent = "space-between";


function resetBoxes(event) {
  divContainer.innerHTML = "";
}


function createBoxes(event) {
  const amount = inputControl.value;
  const elements = [];
  for (let i = 1; i <= amount; i += 1){
     const divBox = document.createElement("div");
    divBox.style.width = "100%";
    divBox.style.height = "80px";
    divBox.style.margin = "2px";
    divBox.style.backgroundColor = `${getRandomHexColor()}`;
    elements.push(divBox);
  }
  divContainer.innerHTML = "";
  divContainer.append(...elements);
}

// function createBoxes(event) {
//   const divBox = document.createElement("div");
//   divBox.style.display = "block";
//   divBox.style.width = "100px";
//   divBox.style.height = "100px";
//   divBox.style.backgroundColor = "red";
//   console.log(divBox);

// }


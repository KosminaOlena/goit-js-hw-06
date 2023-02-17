function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const textColorChangeRef = document.querySelector('.color');
const buttonChangeRef = document.querySelector('.change-color');

buttonChangeRef.addEventListener('click', onChangeColorBody);

function onChangeColorBody(event) {
  const colorNow = getRandomHexColor();
  textColorChangeRef.textContent = colorNow;
  bodyRef.style.backgroundColor = colorNow;
}

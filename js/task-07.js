
const rangeWatcherFontSize = document.querySelector('#font-size-control');
const textChangFontSize = document.querySelector('#text');

rangeWatcherFontSize.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
    textChangFontSize.style.fontSize = `${event.currentTarget.value}px`;
}
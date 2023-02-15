const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsContainerEl = document.querySelector('#ingredients');

const makeIngredientsEl = args => {
  return args.map(arg => {
const itemEl = document.createElement('li');
itemEl.classList.add('item');
  itemEl.textContent = arg;
  return itemEl;
})
}
const elements = makeIngredientsEl(ingredients);

ingredientsContainerEl.append(...elements);

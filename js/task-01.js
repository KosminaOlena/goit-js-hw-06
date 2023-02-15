
const categories = document.querySelector("#categories");
const itemEl = categories.querySelectorAll(".item");
console.log(`Number of categories: ${categories.children.length}`);
itemEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})

const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((elem, i) => {
  const title = elem.querySelector("h2");
  console.log(`Category: ${title.textContent}`);

  const liItemEl = elem.querySelectorAll("li");
  console.log(`Elements: ${liItemEl.length}`);
});
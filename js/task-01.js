const categoryRef = document.querySelectorAll("#categories h2");
console.log("Number of categories: ", categoryRef.length);

categoryRef.forEach(category => {
  console.log("Category: ", category.textContent);
const children_list = category.nextElementSibling.children;
  console.log("Elements: ", children_list.length);
    
})
'use strict';
const list = document.querySelector("#categories");
const categoriesNumbers = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesNumbers.length}`);
categoriesNumbers.forEach(categoriesNumber => {
    const categoryTitle = categoriesNumber.querySelector("h2").textContent;
    const categoryValue = categoriesNumber.querySelectorAll("li");
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryValue.length}`);
});
const header1 = document.querySelector("h1");
const recipeName = header1.innerText;

console.log(recipeName);

const tagForRecipe = header1.nodeName;

console.log(tagForRecipe);

const description = document.querySelector(".description");
const desComputedStyle = window.getComputedStyle(description);
const desFontSize = desComputedStyle.fontSize;

console.log(desFontSize);

const image = document.querySelector("img");
const imageAltValue = image.getAttribute("alt");

console.log(imageAltValue);

const imageURL = image.getAttribute("src");

const imageComputedStyle = window.getComputedStyle(image);

const imageHeight = imageComputedStyle.height;
const imageWidth = imageComputedStyle.width;

const imageObject = {
  url: imageURL,
  height: imageHeight,
  width: imageWidth,
};
console.log(imageObject);

const batter = document.querySelector(".ingredients-list-paste");
const numOfIngredientsBatter = batter.childElementCount;
console.log(numOfIngredientsBatter);

const instructionArray = [];

const instructionElement = document.querySelector(".instructions-list");
const instructionChildrens = instructionElement.children;

for (let i = 0; i < instructionChildrens.length; i++) {
  const instructionObject = {
    order: i + 1,
    text: instructionChildrens[i].innerText,
  };

  instructionArray.push(instructionObject);
}

console.log(instructionArray);

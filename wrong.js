const logoElement = document.querySelector(".logo-text");
logoElement.style.color = "rgb(56, 66, 65)";

const header = document.querySelector("header");
header.style.justifyContent = "start";
header.style.borderBottomColor = "rgb(211, 211, 211)";
const recipeName = document.getElementById("recipe-name");
recipeName.innerText = "Frozen Cheescake";

const spanInTimeContainer = document.querySelectorAll(".time-container span");
spanInTimeContainer[0].classList.add("material-icons");
spanInTimeContainer[1].innerText = "60+ min";

const image = document.querySelector(".image-container img");
image.setAttribute("src", "assets/frozen-cheesecake-slice.jpg");

const ingredientsContainer = document.querySelector(".ingredients-container");
ingredientsContainer.style.backgroundColor = "white";

const paraRemove = document.querySelector(".ingredients-list-bottom p");
paraRemove.remove();

const cakeBottomIngredsList = document.querySelector(
  ".ingredients-list-bottom"
);

const bottomIngredsList = "<li>15st digistivetex</li> <li>Lite smör</li>";

cakeBottomIngredsList.insertAdjacentHTML("afterbegin", bottomIngredsList);

const cakeBatterIngredList = document.querySelector(".ingredients-list-paste");
cakeBatterIngredList.children[2].innerHTML = "3tsk vaniljsocker";

const missingIngred = "<li>400g naturell philadelphiaost</li>";
cakeBatterIngredList.insertAdjacentHTML("beforeend", missingIngred);

const instructionHeader = document.querySelector(".instructions");
instructionHeader.classList.remove("shadow");

const instructionsList = document.querySelector(".instructions-list");
instructionsList.children[1].innerHTML =
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
instructionsList.children[8].innerHTML = "Ställ in i frysen över natten.";

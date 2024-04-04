import menuArray from "/data.js";
import { v4 as uuid } from "https://jspm.dev/uuid";

const order = document.querySelector("#order");

let orderList = [];

// ===== Get Items Function ===== //

function getItemArray() {
  let items = "";
  menuArray.forEach((item) => {
    items += `
  <div class="menu-wrapper">
    <div>
      <span class="menu-emoji">${item.emoji}</span>
    </div>
    <div class="menu-text">
      <p class="menu-text-name">${item.name}</p>
      <span class="menu-text-ing">${item.ingredients}</span>
      <p class="menu-text-price">&#36;${item.price}</p>
    </div>
    <div class="menu-add">
      <img src="./assets/Ellipse 1.png" class="menu-add-icon"/>
      <span class="plus" data-id="${item.id}">&#65291;</span>
    </div>
  </div>
  `;
  });
  return items;
}
getItemArray();

// ===== EventListeners ===== //

document.addEventListener("click", function (e) {
  if (e.target.dataset.id) {
    addItemToMenu(menuArray[e.target.dataset.id]);
  }
});

// ===== Event Functions ===== //

function addItemToMenu(selectedItem) {
  const addItem = { ...selectedItem };
  console.log(addItem);
  addItem.orderId = uuid();
  orderList.push(addItem);
}

function render() {
  document.querySelector("#item-container").innerHTML = getItemArray();
}
render();

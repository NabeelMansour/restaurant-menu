import { menuArray } from "./data.js";

const container = document.querySelector("#item-container");

const items = menuArray
  .map((item) => {
    return `
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
        <img src="./assets/Ellipse 1.png" />
        <span class="plus">&#65291;</span>
      </div>
  </div>
  `;
  })
  .join("");

container.innerHTML = items;

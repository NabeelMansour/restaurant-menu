import menuArray from "./data.js";

const container = document.querySelector("#item-container");
const order = document.querySelector("#order");

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
      <span class="plus" data-add="${item.id}">&#65291;</span>
    </div>
  </div>
  `;
  })
  .join("");

container.innerHTML = items;

// ===== EventListeners ===== //

document.addEventListener("click", function (e) {
  if (e.target.dataset.add == 0) {
    addPizzaToBill(e.target.dataset.add);
  } else if (e.target.dataset.add == 1) {
    addBurgerToBill(e.target.dataset.add);
  } else if (e.target.dataset.add == 2) {
    addBeerToBill(e.target.dataset.add);
  }
});

// ===== Event Functions ===== //

const addPizzaToBill = () => {
  render();
};

const addBurgerToBill = () => {
  console.log("Burger");
};

const addBeerToBill = () => {
  console.log("Beer");
};

const getFoodHtml = () => {
  let foodHtml = "";

  return foodHtml;
};

function render() {
  document.getElementById("order").innerHTML = getFoodHtml();
}

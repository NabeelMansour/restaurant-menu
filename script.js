import menuArray from "/data.js";
import { v4 as uuid } from "https://jspm.dev/uuid";

const totalItems = document.querySelector("#total-items");
const modal = document.querySelector("#modal");
const cardDetailsForm = document.getElementById("card-details-form");
const cashout = document.getElementById("cashout");
let orderList = [];

// ===== EventListeners ===== //

document.addEventListener("click", function (e) {
  if (e.target.dataset.id) {
    addItemToMenu(menuArray[e.target.dataset.id]);
  }

  if (e.target.dataset.remove) {
    removeItem(e.target.dataset.remove);
  }
});

// ===== Submit Event ===== //

cardDetailsForm.addEventListener("submit", function (e) {
  e.preventDefault();

  checkoutMessage();
  modal.style.display = "none";
  totalItems.style.display = "none";
});

// ===== Remove Function ===== //

function removeItem(removeItemId) {
  orderList = orderList.filter(function (item) {
    return item.orderId != removeItemId;
  });

  if (orderList.length === 0) {
    totalItems.innerHTML = "";
  } else {
    renderOrder();
  }
}

// ===== Get Items Function ===== //

function getItemArray() {
  let items = "";
  menuArray.forEach((item) => {
    const { emoji, name, ingredients, price, id } = item;
    items += `
  <div class="menu-wrapper">
    <div>
      <span class="menu-emoji">${emoji}</span>
    </div>
    <div class="menu-text">
      <p class="menu-text-name">${name}</p>
      <span class="menu-text-ing">${ingredients}</span>
      <p class="menu-text-price">&#36;${price}</p>
    </div>
    <div class="menu-add">
      <img src="./assets/Ellipse 1.png" class="menu-add-icon"/>
      <span class="plus" data-id="${id}">&#65291;</span>
    </div>
  </div>
  `;
  });
  return items;
}

// ===== Add ITem Function ===== //

function addItemToMenu(selectedItem) {
  if (!orderList.includes(selectedItem)) {
    const addItem = { ...selectedItem };
    addItem.orderId = uuid();
    orderList.push(addItem);
  }
  renderOrder();
}

// ===== Render functions ===== //

function renderOrder() {
  const totalOrderPrice = orderList.reduce(function (total, currentPrice) {
    return total + currentPrice.price;
  }, 0);

  totalItems.innerHTML = `
          <div class="order-container" id="order-container">
            <h2 class='item-heading'>Your Order</h2>
            <div class="order" id="order"></div>
            <div class="item-divider"></div>
            <div class="item-total">
                  <p class="total-price">Total price:</p>
                  <p class="item-price">&#36;${totalOrderPrice}</p>
            </div>
            <button class="order-btn" id="order-btn">Complete order</button>
          </div>  
  `;

  document.getElementById("order-btn").addEventListener("click", function () {
    modal.style.display = "inline";
  });

  let orderItemList = "";
  orderList.forEach(function (item) {
    orderItemList += `
            <div class="orders" id="orders">
              <p class="item-name">${item.name}</p>
              <p class="remove" data-remove="${item.orderId}">remove</p>
              <p class="item-price">&#36;${item.price}</p>
            </div>
    `;
  });
  return (order.innerHTML = orderItemList);
}

// ===== Render Items Function ===== //
function render() {
  document.querySelector("#item-container").innerHTML = getItemArray();
}
render();

// ===== checkout Function ===== //

function checkoutMessage() {
  const detailsForm = new FormData(cardDetailsForm);
  const name = detailsForm.get("fullName");
  const formMessage = `<p>Thanks, ${name}!Your order is on its way'!</p>`;
  cashout.style.display = "block";
  cashout.innerHTML = formMessage;
}

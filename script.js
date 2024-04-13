import menuArray from "/data.js";
import { v4 as uuid } from "https://jspm.dev/uuid";

const totalItems = document.querySelector("#total-items");
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

// ===== EventListeners ===== //

document.addEventListener("click", function (e) {
  if (e.target.dataset.id) {
    addItemToMenu(menuArray[e.target.dataset.id]);
  }
});

// ===== Event Function ===== //

function addItemToMenu(selectedItem) {
  const addItem = { ...selectedItem };
  addItem.orderId = uuid();
  orderList.push(addItem);
  renderOrder();
}

// ===== Render function ===== //

function renderOrder() {
  const totalOrderPrice = orderList.reduce(function (total, currentPrice) {
    return total + currentPrice.price;
  }, 0);

  totalItems.innerHTML = `
          <div class="order-container">
            <h2 class='item-heading'>Your Order</h2>
            <div class="order" id="order"></div>
            <div class="item-divider"></div>
            <div class="item-total">
                  <p class="total-price">Total price:</p>
                  <p class="item-price">&#36;${totalOrderPrice}</p>
            </div>
            <button class="order-btn">Complete order</button>
          </div>  
  `;
  let orderItemList = "";
  orderList.forEach(function (item) {
    orderItemList += `
            <div class="orders">
              <p class="item-name">${item.name}</p>
              <p class="remove">remove</p>
              <p class="item-price">&#36;${item.price}</p>
            </div>
    `;
  });

  // console.log(totalOrderPrice);

  return (order.innerHTML = orderItemList);
}

function render() {
  document.querySelector("#item-container").innerHTML = getItemArray();
}
render();

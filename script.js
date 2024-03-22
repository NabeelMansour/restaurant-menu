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


// MY CODE FOR THE ORDER DISPLAY

let currentItem = { } // TO STORE NAME AND PRICE

const menuAdd = document.querySelectorAll(".menu-add") // IT RETURNS A NODELIST SO ADDEVENTLISTENER CAN BE USED ON IT DIRECTLY

menuAdd.forEach((icon) => {                                   // I'D LIKE TO TRY & FIND A WAY TO USE EVENTLISTENER WITHOUT FOREACH       
  icon.addEventListener("click", (e) => {                    // LIKE ON A PARENT CONTAINER BUT IT WILL REQUIRE TO REFACTOR DYNAMIC RENDERING I GUESS
    menuArray.find((menuItem) => {
      if(menuItem.id == e.target.dataset.add) {
        currentItem = {
                   name: menuItem.name,
                   price: menuItem.price
                      } 
               }
         })
      displayOrderItems()
})
  })

    
//   //  FIRST I MADE IT WORK THROUGH FOR LOOP THEN I USED .FIND METHOD ABOVE
//   // through for loop
//   // for(let i = 0; i < menuArray.length; i++) {
//   //   if(menuArray[i].id == e.target.dataset.add) {
//   //       currentItem = {
//   //                   name: menuArray[i].name,
//   //                   price: menuArray[i].price
//   //                     }                       
//   //     }
//   // }

function displayOrderItems() {
  document.getElementById("order-container-title").style.display = "block"
  order.innerHTML += `
              <div class="order-item">
              <p> ${currentItem.name} </p>
              <p> &#36;${currentItem.price} </p>
              </div> `
}


// ANOTHER IDEA WAS TO USE THROUGH:
// container.addEventListener("click", (e) => {
//   console.log(`${e.target.parentElement.parentElement.childNodes[3].innerHTML} `)
// })


// ===================== NABEEL'S CODE ============================ 
// ===== EventListeners ===== //

// document.addEventListener("click", function(e) {
//   if (e.target.dataset.add == 0) {
//     addPizzaToBill(e.target.dataset.add);
//   } else if (e.target.dataset.add == 1) {
//     addBurgerToBill(e.target.dataset.add);
//   } else if (e.target.dataset.add == 2) {
//     addBeerToBill(e.target.dataset.add);
//   }
// });

// // ===== Event Functions ===== //

// const addPizzaToBill = () => {
//   render();
// };

// const addBurgerToBill = () => {
//   console.log("Burger");
// };

// const addBeerToBill = () => {
//   console.log("Beer");
// };

// const getFoodHtml = () => {
//   let foodHtml = "";

//   return foodHtml;
// };

// function render(id) {
//   document.getElementById("order").innerHTML = getFoodHtml();
// }

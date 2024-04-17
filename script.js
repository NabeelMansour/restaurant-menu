import menuArray from "/data.js";
import { v4 as uuid } from "https://jspm.dev/uuid";


const container = document.querySelector("#item-container");
const order = document.querySelector("#order");   



// ===== Get Items Function ===== //

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
////////////////////////////////////////////////////////////////////////
const orderArr = []

const menuAdd = document.querySelectorAll(".menu-add") // IT RETURNS A NODELIST SO ADDEVENTLISTENER CAN BE USED ON IT DIRECTLY
                                                       // I'D LIKE TO TRY & FIND A WAY TO USE EVENTLISTENER WITHOUT FOREACH (// LIKE ON A PARENT CONTAINER BUT IT WILL REQUIRE TO REFACTOR DYNAMIC RENDERING I GUESS)

menuAdd.forEach((icon) => {                                                           
  icon.addEventListener("click", (e) => {  
    let selectedItem = { }                            
    menuArray.find((menuItem) => {
      if(menuItem.id == e.target.dataset.add) {
        selectedItem = {
                        id: menuItem.id,
                        name: menuItem.name,
                        price: menuItem.price,
                        amount: 1,
                        sum: menuItem.price,
                      } 
            }
         })

      addToOrderArr(selectedItem)       
      displayOrderedItems()
  })
})


function addToOrderArr(item) {
  let isItemFound = false
  for(let i = 0; i < orderArr.length; i++) {
    if(orderArr[i].id === item.id) {
      isItemFound = true        
      orderArr[i].amount = orderArr[i].amount + item.amount
      orderArr[i].sum = orderArr[i].amount * item.price
    }
  }

  if(!isItemFound) {
    orderArr.push(item)
  }
}



function displayOrderedItems() {
  document.getElementById("order-container-title").style.display = "block"
  order.innerHTML = createOrderHTML()
  addListenersToRemoveBtns()
}

function addListenersToRemoveBtns() {
  const orderedItems = document.querySelectorAll(".ordered-item")
  orderedItems.forEach((removeBtn) => {
    removeBtn.addEventListener("click", (e) => {
      removeItems(e)
    })
  })
}

  function removeItems(item) {
    for(let i = 0; i < orderArr.length; i++) {
      if(orderArr[i].id == item.target.dataset.remove) {
        const index = orderArr.indexOf(orderArr[i])
       orderArr.splice(index, 1) 
      }
    }
      displayOrderedItems()
  } 


function createOrderHTML() {
  let orderHTML = " "
  orderArr.forEach((el) => {
    orderHTML +=   ` <div class="ordered-item">
                <p> ${el.name} <span class=remove data-remove=${el.id}> remove </span> </p>
                <p> <span class=amount> ${el.amount === 1 ? "" : "x" + el.amount} </span> &#36;${el.sum} </p>
               </div> `
    
   })
   
  return orderHTML  
}



 

// ANOTHER IDEA WAS TO USE THROUGH:
// container.addEventListener("click", (e) => {
//   console.log(`${e.target.parentElement.parentElement.childNodes[3].innerHTML} `)
// })
const carts = document.querySelectorAll(".add-cart");

const product = [
  {
    name: "Book 1",
    tag: "book1",
    price: 15,
    inCart: 0,
  },
  {
    name: "Book 2",
    tag: "book2",
    price: 20,
    inCart: 0,
  },
  {
    name: "Book 3",
    tag: "book3",
    price: 30,
    inCart: 0,
  },
  {
    name: "Book 4",
    tag: "book4",
    price: 50,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(product[i]), totalCost(product[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (!productNumbers) {
    document.querySelector(".cart span").textContent = 0;
  } else {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (!productNumbers) {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  } else {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

  if (!cartItems) {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  } else {
    if (cartItems[product.tag] === undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = parseInt(localStorage.getItem("totalCost"));

  if (!cartCost) {
    localStorage.setItem("totalCost", product.price);
  } else {
    localStorage.setItem("totalCost", cartCost + product.price);
  }
}

function displayCart() {
  console.log("update cart");

  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
  let productContainer = document.querySelector(".products");
  let cartCost = parseInt(localStorage.getItem("totalCost"));

  if (!cartItems && productContainer) {
    productContainer.innerHTML = `<div>Cart is empty!!</div>`;
    return;
  }

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <div class="product">
        <div class="title">
          <img src='pic/${item.tag}.png'>
          <span>${item.name}</span>
        </div>
        <div class="price">
          $${item.price},00
        </div>
        <div class="quantity">
          <ion-icon name="remove-outline" class="decrease"></ion-icon>
          ${item.inCart}
          <ion-icon name="add-outline" class='increase'></ion-icon>
        </div>
        <div class="total">
          ${item.price * item.inCart}
        </div>
        <div class='remove'>
         <ion-icon name="close-outline"></ion-icon>
        </div>
      </div>
    `;
    });
    productContainer.innerHTML += `
      <div class='basketTotalContainer'>  
        <div class='basketTotalTitle'>
         Subtotal <span>$${cartCost}</span>
        </div>
        <div>
          <button type='submit' name='checkout' class='btn'>
            <ion-icon name="cart-outline"></ion-icon>
            Checkout
          </button>
        </div>
      </div>
    `;
  }
}

function initListen() {
  let allIncrease = document.querySelectorAll(".increase");
  let allDecrease = document.querySelectorAll(".decrease");
  for (let i = 0; i < allIncrease.length; i++) {
    allIncrease[i].addEventListener("click", (e) => addToCart(e));
    allDecrease[i].addEventListener("click", () => removeFromCart());
  }
}

function addToCart(e) {
  console.log("Added!");

  // if (product === "Book 1") {
  //   let current = (cartItems.book1.inCart += 1);
  //   cartItems.book1.inCart = current;
  // }

  // localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  // console.log(product);

  // displayCart();
}

function removeFromCart() {
  console.log("Remove!");
}

onLoadCartNumbers();
displayCart();
initListen();

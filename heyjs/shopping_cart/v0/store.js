if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Selectors
const totalPrice = document.getElementsByClassName("cart-total-price")[0];

// Functions
function ready() {
  // Event Listener
  const removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  const quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  const addToCartButtons = document.querySelectorAll(".shop-item-button");
  for (let i = 0; i < addToCartButtons.length; i++) {
    let addToCartButton = addToCartButtons[i];
    addToCartButton.addEventListener("click", addToCartClicked);
  }

  document
    .querySelector(".btn-purchase")
    .addEventListener("click", purchaseClicked);

  updateCartTotal();
}

const purchaseClicked = () => {
  alert("Thank you for you purchase");
  let cartItems = document.querySelector(".cart-items");
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
};

const addItemToCart = (title, price, imageSrc) => {
  let cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  let cartItems = document.querySelector(".cart-items");
  let cartItemNames = cartItems.querySelectorAll(".cart-item-title");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText === title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  let cartRowContents = `
          <div class="cart-item cart-column">
            <img class="cart-item-image" width="100" height="100" src=${imageSrc} alt="">
            <span class="cart-item-title">${title}</span>
          </div>
          <span class="cart-price cart-column">${price}</span>
          <div class="cart-quantity cart-column">
            <input type="number" class="cart-quantity-input" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
          </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .querySelector(".btn-danger")
    .addEventListener("click", removeCartItem);
  cartRow
    .querySelector(".cart-quantity-input")
    .addEventListener("change", quantityChanged);
};

const removeCartItem = (e) => {
  let buttonClicked = e.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
};

const quantityChanged = (e) => {
  let input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
};

const addToCartClicked = (e) => {
  let button = e.target;
  let shopItem = button.parentElement.parentElement;
  let title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  let price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  let imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;

  addItemToCart(title, price, imageSrc);
  updateCartTotal();
};

const updateCartTotal = () => {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total += price * quantity;
  }
  total = Math.round(total * 100) / 100;
  totalPrice.innerText = `$ ${total}`;
};

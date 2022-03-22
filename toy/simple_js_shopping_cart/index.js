// get cart total from session on load
updateCartTotal();

// button event listeners
document.getElementById("emptycart").addEventListener("click", emptyCart);
const btns = document.getElementsByClassName("addtocart");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    addToCart(this);
  });
}

// ADD TO CART functions
function addToCart(elem) {
  // init
  let sibs = [];
  let getprice;
  let getproductName;
  let cart = [];
  let stringCart = [];

  while ((elem = elem.previousSibling)) {
    console.log(elem);
    if (elem.className === "price") {
      getprice = elem.innerText;
    }
    if (elem.className === "productname") {
      getproductName = elem.innerText;
    }

    sibs.push(elem);
  }
  console.log(sibs);

  let product = {
    productname: getproductName,
    price: getprice,
  };
  console.log(product);

  let stringProduct = JSON.stringify(product);

  console.log(stringProduct);
}

// Calculate Cart total
function updateCartTotal() {}

// user feedback on successful add
function addedToCart(pname) {}

// User Manually empty cart
function emptyCart() {}

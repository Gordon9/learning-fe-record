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

  // TODO
  while ((elem = elem.previousSibling)) {
    // console.log(elem);
    if (elem.className === "price") {
      getprice = elem.innerText;
    }
    if (elem.className === "productname") {
      getproductName = elem.innerText;
    }

    sibs.push(elem);
  }
  // console.log(sibs);

  let product = {
    productname: getproductName,
    price: getprice,
  };
  console.log(product);
  // convert product data to JSON for storage
  let stringProduct = JSON.stringify(product);

  if (!sessionStorage.getItem("cart")) {
    cart.push(stringProduct);
    stringCart = JSON.stringify(cart);
    sessionStorage.setItem("cart", stringCart);
    updateCartTotal();
  } else {
    cart = JSON.parse(sessionStorage.getItem("cart"));
    cart.push(stringProduct);
    stringCart = JSON.stringify(cart);
    sessionStorage.setItem("cart", stringCart);
    updateCartTotal();
  }

  console.log(stringCart);
}

// Calculate Cart total
function updateCartTotal() {
  let items = 0;
  let productname = "";
  let price = 0;
  let total = 0;
  let item;
  let carttable = "";
  ``;
  if (sessionStorage.getItem("cart")) {
    let cart = JSON.parse(sessionStorage.getItem("cart"));
    items = cart.length;
    for (let i = 0; i < items; i++) {
      item = JSON.parse(cart[i]);
      price = parseFloat(item.price.split("$")[1]);
      productname = item.productname;
      carttable +=
        "<tr><td>" +
        productname +
        "</td><td>$" +
        price.toFixed(2) +
        "</td></tr>";
      total += price;
    }
  }

  document.getElementById("carttable").innerHTML = carttable;
  document.getElementById("itemsquantity").innerHTML = items;
  document.getElementById("total").innerHTML = total.toFixed(2);
}

// user feedback on successful add
function addedToCart(pname) {}

// User Manually empty cart
function emptyCart() {}

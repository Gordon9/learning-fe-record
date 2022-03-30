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
    if (elem.nodeType === 3) continue;
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
    addedToCart(getproductName);
    updateCartTotal();
  } else {
    cart = JSON.parse(sessionStorage.getItem("cart"));
    cart.push(stringProduct);
    stringCart = JSON.stringify(cart);
    sessionStorage.setItem("cart", stringCart);
    addedToCart(getproductName);
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
      // console.log(item.price);
      // var x = JSON.parse(cart[i]);
      // price = parseFloat(x.price.split('$')[1]);
      // price = parseFloat(price.split("$")[1]);
      price = parseFloat(item.price.split("$")[1]);
      console.log(price);
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

  // var total = 0;
  // var price = 0;
  // var items = 0;
  // var productname = "";
  // var carttable = "";
  // if (sessionStorage.getItem("cart")) {
  //   //get cart data & parse to array
  //   var cart = JSON.parse(sessionStorage.getItem("cart"));
  //   //get no of items in cart
  //   items = cart.length;
  //   //loop over cart array
  //   for (var i = 0; i < items; i++) {
  //     //convert each JSON product in array back into object
  //     var x = JSON.parse(cart[i]);
  //     //get property value of price
  //     console.log(x);
  //     price = parseFloat(x.price.split("$")[1]);
  //     productname = x.productname;
  //     //add price to total
  //     carttable +=
  //       "<tr><td>" +
  //       productname +
  //       "</td><td>$" +
  //       price.toFixed(2) +
  //       "</td></tr>";
  //     total += price;
  //   }
  // }

  document.getElementById("carttable").innerHTML = carttable;
  document.getElementById("itemsquantity").innerHTML = items;
  document.getElementById("total").innerHTML = total.toFixed(2);
}

// user feedback on successful add
function addedToCart(pname) {
  let message = pname + " was added to the cart";
  let alerts = document.getElementById("alerts");
  alerts.innerHTML = message;
  if (!alerts.classList.contains("message")) {
    alerts.classList.add("message");
  }
}

// User Manually empty cart
function emptyCart() {}

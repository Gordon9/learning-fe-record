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

onLoadCartNumbers();

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

const carts = document.querySelectorAll(".add-cart");

const producst = [
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
  carts[i].addEventListener("click", () => cartNumbers());
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

function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (!productNumbers) {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  } else {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  }

  console.log(productNumbers);
}

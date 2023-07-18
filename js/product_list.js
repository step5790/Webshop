window.addEventListener("load", start);
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

let url = `https://kea2sem-1270.restdb.io/rest/products?fetchchildren=true&q={"category":"${category}"}`;
const options = {
  method: "GET",
  headers: {
    "x-apikey": "602f53d35ad3610fb5bb638d",
    "Content-Type": "application/json",
  },
};

function start() {
  fetch(url, {
    method: "GET",
    headers: {
      "x-apikey": "602f53d35ad3610fb5bb638d",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showProducts(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

function showProducts(products) {
  const productsTemplate = document.querySelector(".products_template").content;

  products.forEach((products) => {
    const productsClone = productsTemplate.cloneNode(true);
    //populate
    productsClone.querySelector(".products_title").textContent = product.name;

    productsClone.querySelector(".regular_price_number").textContent =
      product.price;
    productsClone.querySelector(".products_thumbnail").src = product.image;
    productsClone.querySelector(
      ".products_link"
    ).href = `product_item.html?product=${product._id}`;

    const parentEl = document
      .querySelector(".products_content")
      .appendChild(productsClone);
  });
}

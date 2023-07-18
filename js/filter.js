window.addEventListener("load", start);
const urlFilterParams = new URLSearchParams(window.location.search);
const categoryFilter = urlFilterParams.get("productColor");

let urlFilter = `https://kea2sem-1270.restdb.io/rest/products?fetchchildren=true&q={"productColor":"${categoryFilter}"}`;
const optionsFilter = {
  method: "GET",
  headers: {
    "x-apikey": "602f53d35ad3610fb5bb638d",
    "Content-Type": "application/json",
  },
};

function start() {
  fetch(urlFilter, {
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
  // breadcrumbs
  document.querySelector("h1").textContent = category;
  document.querySelector(".breadcrumbs_item_active").textContent = category;

  const productsTemplate = document.querySelector(".products_template").content;

  products.forEach((product) => {
    //console.log(product);
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

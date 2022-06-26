async function start() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  //   console.log(data);
  createProduct(data);
}

start();
// create product list
function createProduct(data) {
  let dataProduct = " ";
  data.map((values) => {
    // console.log(values);
    dataProduct += `
    <div class="card">
            <img
              src="${values.image}"
              alt="zajo_shirt "
            />
            <h2 class="product_title">${values.title}</h2>
            <p class="product_price"><span>$</span>${values.price}</p>
            <p class="product_category">${values.category}</p>
            <p class="product_description">
              ${values.description}
            </p>
          </div>
    
    `;
  });

  document.querySelector(".cards").innerHTML = dataProduct;
}

// function For search

function searchBar() {
  const search = document.getElementById("search");
  console.log(search);
  search.addEventListener("keyup", function (e) {
    const term = e.target.value.toLowerCase();
    console.log(term);
  });
}

searchBar();

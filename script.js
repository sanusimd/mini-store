let search = document.getElementById("search");
let products = document.querySelector(".cards");

async function start() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  // console.log(data[0].title);
  createProduct(data);
  // searchBar(data);
  // console.log(data);
}

start();
// create product list
function createProduct(data) {
  let dataProductHtml = " ";
  data.map((values) => {
    // console.log(values);
    dataProductHtml += `
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
    // console.log(data);
    // searchBar(values.title);
  });

  document.querySelector(".cards").innerHTML = dataProductHtml;
}

// function For search
search.addEventListener("keyup", searchBar);

function searchBar() {
  let searchValue = search.value.toLowerCase();
  let cardList = products.querySelectorAll(".card");
  console.log(cardList);

  for (let i = 0; i < cardList.length; i++) {
    let title = cardList[i].querySelector(".product_title");
    console.log(cardList[i]);
    if (title.innerHTML.toLowerCase().indexOf(searchValue) > -1) {
      cardList[i].style.display = "block";
    } else {
      cardList[i].style.display = "none";
    }
  }
}

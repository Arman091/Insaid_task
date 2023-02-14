const latestProducts = [];
const Datafetch = async () => {
  let res = await fetch("https://floralcart.onrender.com/products/");
  let data = await res.json();
  return data;
};

let products = Datafetch();

let product_list = document.querySelector("#latest-products");
let best_product_list = document.querySelector("#best-products");
products.then((res) => {
  for (let i = 0; i <= 6; i++) {
    latestProducts.push(res[i]);
  }
  console.log(res)
  latestProducts.forEach((e) => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.url}" alt="">
                    <img src="${e.url}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                         ${e.title.shortTitle}
                    </div>
                    <div class="product-card-price">
                        <span><del>$${e.price.mrp}</del></span>
                        <span class="curr-price">$${e.price.cost}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    product_list.insertAdjacentHTML("beforeend", prod);
    best_product_list.insertAdjacentHTML("afterbegin", prod);
  })
});





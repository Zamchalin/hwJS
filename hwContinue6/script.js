const url = "./data.json";
async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

document.addEventListener("DOMContentLoaded", async (e) => {
  const data = await getData(url);
  const productsEl = document.querySelector(".products");
  data.forEach((e) => {
    productsEl.insertAdjacentHTML(
      "beforeend",
      `<a href="#" class="products_card">
            <img src="${e.img}" alt="" />
            <div class="text_in_card">
              <h1 class="title_products_card">${e.title}</h1>
              <p class="description">${e.description}
                
              </p>
              <p class="price">${e.price}</p>
            </div>
          </a>`
    );
  });
});

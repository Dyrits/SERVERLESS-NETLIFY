(async function () {
  try {
    const { data } = await axios.get("/netlify/03-airtable.list-products");
    document.querySelector(".result").innerHTML = data.map(generate).join(String());
  } catch (error) {
    console.error(error);
    document.querySelector(".result").textContent = "An error occurred while fetching the data.";
  }
}());

function generate(product) {
  const { id, name, image, price } = product;
  return `
  <a href="product.html?id=${id}" class="product">
    <img src="${image}" alt="${name}" />
    <div class="info">
      <h5>${name}</h5>
      <h5 class="price">$${price}</h5>
    </div>
  </a>
  `;
}
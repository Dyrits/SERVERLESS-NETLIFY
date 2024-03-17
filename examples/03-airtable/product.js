(async function () {
  try {
    const id = window.location.search;
    const { data } = await axios.get(`/netlify/03-airtable.get-product-${id}`);
    document.querySelector(".result").innerHTML = generate(data);
  } catch (error) {
    console.error(error);
    document.querySelector(".result").textContent = "An error occurred while fetching the data.";
  }
}());

function generate(product) {
  const { name, description, image, price } = product;
  return `
  <h1 class="title">${name}</h1>
  <article class="product">
    <img class="product-img"
      src="${image}"
      alt="${name}"
    />
    <div class="product-info">
      <h5 class="title">${name}</h5>
      <h5 class="price">$${price}</h5>
      <p class="desc">${description}</p>
    </div>
  </article>
`;
}
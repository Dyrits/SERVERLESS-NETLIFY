const article = ({ name, image, price }) => `
<article class="product">
    <img
        src="${image.url}"
        alt="The image (for ${name}) could not be loaded."
     />
    <div class="info">
        <h5>${name}</h5>
        <h5 class="price">$${price}</h5>
    </div>
</article>
`;

(async function () {
  const result = document.querySelector(".result");
  try {
    const { data } = await axios.get("/netlify/02-basic-api");
    result.removeChild(result.firstChild);
    data.forEach(item => {
      result.insertAdjacentHTML("beforeend", article(item))
    });
  } catch (error) {
    console.error(error);
    result.innerHTML = `<h2>An error occurred while fetching the data.</h2>`;
  }
}());


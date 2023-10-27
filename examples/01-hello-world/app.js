(async function () {
  try {
    const { data } = await axios.get("/netlify/01-hello-world");
    document.querySelector(".result").textContent = data;
  } catch (error) {
    console.error(error);
    document.querySelector(".result").textContent = "An error occurred while fetching the data.";
  }
}());
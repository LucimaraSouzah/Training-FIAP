const products = document.querySelector("#products");

const showData = (result) => {
  result.map((data) => {
    products.innerHTML += `
    <div id="product">
        <h3 id="title">${data.title}</h3>
        <p id="description">${data.description}</p>
        <img id="image" src="${data.thumbnail}" alt="${data.title}"/>
        <h2 id="price">R$ ${data.price}</h2>
        <button id="button">Comprar</button>
     </div>
    `;
  });
};

const fetchProdutos = async () => {
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  const resultado = await fetch(
    `https://dummyjson.com/products?limit=10`,
    options
  );
  const json = await resultado.json();
  showData(json.products);
};

fetchProdutos();

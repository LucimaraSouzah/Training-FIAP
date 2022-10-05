// <!-- Acessar a url pelo JS (fetch) -->
// <!-- Conseguir listar os produtos (10) -->
// <!-- Titulo e descrição do produto -->

// const products = document.querySelector("#products");
const title = document.querySelector("#title");
const description = document.querySelector("#description");

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).innerHTML = result[campo];
      console.log(result[campo])
    }
  }
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
  json.products.map((e) => showData(e));
};

fetchProdutos();

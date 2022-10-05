const cep = document.querySelector("#cep");

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};

// evento blur significa que clicamos na caixa de texto e saimos dela
cep.addEventListener("blur", async (e) => {
  let search = cep.value.replace("-", "");

  if (search.length < 8 || isNaN(search)) {
    alert("CEP inválido");
    cep.value = "";
    return;
  }

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  const resultado = await fetch(
    `https://viacep.com.br/ws/${search}/json/`,
    options
  );
  const json = await resultado.json();

  showData(json);
});

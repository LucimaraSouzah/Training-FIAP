const cep = document.querySelector("#cep");
const resultado = document.querySelector("#resultado");

// evento blur significa que clicamos na caixa de texto e saimos dela
cep.addEventListener("blur", (e) => {
  let search = cep.value.replace("-", "");

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) =>
      response
        .json()
        .then(
          (result) =>
            (resultado.innerHTML =
              result.logradouro +
              ", " +
              result.bairro +
              " - " +
              result.localidade)
        )
    )
    .catch((e) => console.log(e.message));
});

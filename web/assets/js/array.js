const carros = document.querySelector("#carros");
const airCompanies = document.querySelector("#airCompanies");
const listNav = document.querySelector("#listNav");

const carrosArray = [
  "Chevrolet",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Kia",
  "Mazda",
  "Mercedes-Benz",
  "Nissan",
  "Peugeot",
  "Renault",
  "Toyota",
  "Volkswagem",
];

carrosArray.forEach((value, key) => {
  carros.innerHTML += `<option value=${key}>${value}</option>`;
});

const importados = [
  ["BMW", "320i", "M3", "M4", "X5", "X6", "z4 m40i"],
  ["Audi", "a4", "s4", "s4 avanti", "Q7", "RS7", "e-Tron"],
  ["Mercedes", "gtr", "e63", "s63", "brabus gle", "AMG G63"],
];

importados.forEach((marcas) => {
  const select = document.createElement("select");
  select.setAttribute("id", marcas[0]);
  marcas.forEach((carros, key) => {
    select.innerHTML += `<option value="${key}">${carros}</option>`;
  });
  document.querySelector("body").appendChild(select);
});

const airCompaniesArray = [
  "Latam",
  "Gol",
  "Azul",
  "Delta",
  "American Airlines",
  "Emirates",
  "Qatar",
];

const comboAereas = document.createElement("select");
comboAereas.setAttribute("id", "aereas");

airCompaniesArray.forEach((value, key) => {
  comboAereas.innerHTML += `<option value=${key}>${value}</option>`;
});

document.querySelector("body").appendChild(comboAereas);

const menuArray = [
  "Venda",
  "Livros",
  "Mais Vendidos",
  "Eletrônicos",
  "Brinquedos e Jogos",
  "Ideias para Presente",
];

const ulMenu = document.createElement("ul");
ulMenu.setAttribute("id", "menu");
ulMenu.setAttribute("id", "menu-site");

menuArray.forEach((item) => {
  ulMenu.innerHTML += `<li value="${item}">${item}</li>`;
});

document.querySelector("nav").appendChild(ulMenu);

// -------------------------------------------- //

const newCarros = ["Corsa", "Uno", "Gol", "Palio", "Kombi", "208"];

//adicionar um elemento NO FINAL do array. Push
newCarros.push("Celta", "Monza");

//adicionar um elemento NO INÍCIO do array. Unshift
newCarros.unshift("Fusca");

//remover um elemento do FINAL do array. Pop
const ultimo = newCarros.pop(); //retorna o elemento removido

const primeiro = newCarros.shift(); //retorna o elemento removido

const nomeCompleto = "Lucimara Aparecida de Souza Assis";
const nomeArray = nomeCompleto.split(" ");
const americanName = [nomeArray.at(-1), nomeArray[0]].join(", ");

const removeUm = newCarros.splice(3);

console.log(removeUm, "Remove um, splice");
console.log(americanName, "Formato americano");
console.log(newCarros, "NewCarros");

console.log("------------------------------------------------------------");
const frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];

const primeiras = frutas.slice(3); //copia o array
console.log(frutas, " slice o array original não muda");
console.log(
  primeiras,
  "slice - a partir da primeira posição até a terceira que no caso é o índice 2"
);

console.log("------------------------------------------");
// Programação funcional - imutabilidade, os dados não mudam. O array original não é alterado.
// slice - copia o array.
//slice
const filtro = function (item) {
  return item === "Pera" || item === "Maçã";
  //return item.toLowerCase();
};

// console.log(filtro("Pera"));
const frutasMap = frutas.map(filtro); // map - retorna um novo array. Do início ao fim.
const frutasFilter = frutas.filter(filtro); // filter - retorna um novo array. Filtrando apenas true.
const frutasFind = frutas.find(filtro); // find - retorna a primeira ocorrência que for true.

console.log(frutasFind);

idadeArray = [10, 18, 30, 70, 80];

const procuraIdade = (idade) => {
  if (idade >= 0 && idade <= 2) {
    return "Bebê";
  } else if (idade >= 3 && idade <= 11) {
    return "Criança";
  } else if (idade >= 12 && idade <= 17) {
    return "Adolescente";
  } else if (idade >= 18 && idade <= 60) {
    return "Adulto";
  } else {
    return "Idoso";
  }
};

const mapAge = idadeArray.map(procuraIdade);
const filterAge = idadeArray.filter((idade) => idade >= 18 && idade <= 60);
const findAge = idadeArray.find((idade) => idade > 60);

console.log(mapAge);
console.log(filterAge, 'Adulto');
console.log(findAge, 'Idoso');

// Programação funcional
//slice
//map
//filter
//find

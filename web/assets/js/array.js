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

const removeUm = newCarros.splice(3)

console.log(removeUm, "Remove um, splice");
console.log(americanName, "Formato americano");
console.log(newCarros, "NewCarros");

//push, pop
//shift, unshift
//splice
//split
//join

// Programação funcional
//slice
//map
//filter
//find

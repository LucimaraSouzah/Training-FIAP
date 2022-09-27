"use strict";
const nameUser = "Lucimara";
const idade = 20;
const statusNumber = 1;
console.log(`Seja Bem-vinda ao curso de TypeScript ${nameUser}!`);
// estrutura condicional
if (idade <= 2) {
    console.log("Bebê");
}
else if (idade <= 11) {
    console.log("Criança");
}
else if (idade <= 19) {
    console.log("Adolescente");
}
else if (idade <= 59) {
    console.log("Adulto");
}
else {
    console.log("Idoso");
}
if (statusNumber == 1) {
    console.log("Usuário");
}
else if (statusNumber == 2) {
    console.log("Empresa");
}
else if (statusNumber == 3) {
    console.log("Admin");
}
else {
    console.log("Inválido");
}
switch (statusNumber) {
    case 1:
        console.log("Usuário");
        break;
    case 2:
        console.log("Empresa");
        break;
    case 3:
        console.log("Admin");
        break;
    default:
        console.log("Inválido");
}
// estrutura de repetição
const yearFactory = new Date().getFullYear();
for (let x = 1920; x <= yearFactory; x++) {
    console.log(x);
}
// valor inicial; ate; incremento
console.log("-------------------------------");
for (let x = yearFactory; x >= 1920; x -= 10) {
    if (x >= 1990 && x < 2000) {
        continue;
    }
    console.log(x);
}
let y = 2;
for (let x = 0; x <= 10; x++) {
    let result = y * x;
    if (x >= 3 && x <= 9) {
        if (x % 2 == 1 && x > 3) {
            console.log(".");
        }
        continue;
    }
    console.log(`${y} X ${x} = ` + result);
}

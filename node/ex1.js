import fs from "fs";

const dir = "./upload";

if (!fs.existsSync(dir)) {
  console.log("Criando diretório");
  fs.mkdirSync(dir);
  setTimeout(() => {
    console.log("---------------------");
    console.log("Diretório criado com sucesso");
  }, 1000);
} else {
  console.log("Acessando o diretório", dir);
}

let msg = "O melhor time de basquete do mundo é o Golden State Warriors";
let file = "golden-state-warriors.txt";
let path = `${dir}/${file}`;

if (!fs.existsSync(path)) {
  fs.writeFileSync(path, msg);
  console.log("Arquivo criado com sucesso", file);
}

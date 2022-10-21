import fs from "fs";

const dir = "./upload";

if (!fs.existsSync(dir)) {
  console.log("Criando diretório");
  fs.mkdir(dir, (err) => {
    console.log('Diretório criado com sucesso');
  });
} else {
  console.log("Acessando o diretório", dir);
}

let msg = "O segundo melhor time de basquete do mundo é o Lakers";
let file = "lakers.txt";
let path = `${dir}/${file}`;

if (!fs.existsSync(path)) {
  fs.writeFileSync(path, msg, ()=>{
    console.log("Arquivo criado com sucesso", file);
  });
  
}

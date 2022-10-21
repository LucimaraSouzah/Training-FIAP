import fs from "fs";
console.log(process.argv);

if (process.argv[2]) {
  const cmd = process.argv[2];
  let folders = [];
  let files = [];
  switch (cmd) {
    case "html":
      folders = [
        "assets",
        "assets/css",
        "assets/js",
        "assets/images",
        "assets/fonts",
      ];
      files = ["index.html", "assets/css/style.css", "assets/js/main.js"];
      break;
    case "react":
      folders = [
        "src",
        "src/components",
        "src/assets",
        "src/assets/css",
        "src/assets/js",
        "src/assets/images",
        "src/assets/fonts",
      ];
      files = [
        "src/index.js",
        "src/components/App.js",
        "src/assets/css/style.css",
        "src/assets/js/main.js",
      ];
      break;
    default:
      console.log("Invalid command");
      break;
  }

  folders.forEach((folder) => {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
      console.log("Pasta: ", folder, " criada com sucesso!");
    } else {
      console.log("Pasta: ", folder, " já existe!");
    }
  });
  files.forEach((file) => {
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, "");
      console.log("Arquivo: ", file, " criado com sucesso!");
    } else {
      console.log("Arquivo: ", file, " já existe!");
    }
  })
}

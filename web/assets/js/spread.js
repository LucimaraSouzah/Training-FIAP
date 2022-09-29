const aereasNacional = ["Latam", "Gol", "Azul"];

// const latam = aereasNacional[0]
// atribuição por desestruturação de arrays
// const [latam, gol, azul] = aereasNacional
// console.log(azul)

const airCompanies = [
  ...aereasNacional,
  "Delta",
  "United AirLines",
  "Emirates",
];

const [latam, gol, azul, ...internacionais] = airCompanies;

console.log(airCompanies);

const user = {
  name: "Lucimara",
  email: "lucimaraassis@gmail.com",
  password: "dawoimclawapodkppqodw",
};

// destructuring assignment
const { password, ...data } = user;

console.log("Oh meu deus!", data);

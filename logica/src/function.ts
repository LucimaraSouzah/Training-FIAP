import { UserType } from "./types/UserType";

function escrevesubRotina(): void {
  console.log("É uma subrotina");
}

function escreveFunction(): string {
  return "É uma função";
}

escrevesubRotina();
console.log(escreveFunction());

const empresa = "Avanade";
console.log(empresa.toUpperCase(), empresa.toLowerCase(), empresa.length);

const locale: Intl.LocalesArgument = "pt-br";
const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
};

console.log(new Date().toLocaleDateString(locale, options));

const user: UserType = {
  name: "João",
  age: 25,
  email: "joao@gmail.com",
  address: {
    street: "Rua ABC",
    number: 1000,
    city: "São Paulo",
    state: "SP",
  },
  cpf: "123.456.789-00",
};

console.log(user)
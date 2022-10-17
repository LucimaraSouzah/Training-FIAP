import React, { useEffect, useState } from "react";
import {
  Container,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../components/utils/Copyright/Index";
import Login from "../components/Form/Login/Login";

const theme = createTheme();

export default function LoginPage() {
  const [open, setOpen] = useState<boolean | undefined>(false);
  const [contador, setContador] = useState<number>(0);

  useEffect(() => {
    if (contador == 0) {
      document.title = `Executando useEffect a primeira vez. Contador: ${contador}`;
    } else {
      document.title = `Executoando useEffect ${contador} vezes`;
    }
    console.log(`Executou o useEfect ${contador} vezes`);
  }, [contador]);

  console.log(open);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {/* <Button onClick={() => setContador(contador + 1)}>
          Mudando o Contador
        </Button>
        Contador vale {contador} */}
        <Login />
        <Copyright site="Avanade" />
      </Container>
    </ThemeProvider>
  );
}

// import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../components/utils/Copyright/Index";
import Register from "../components/Form/Register/Index";

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   background-image: url("/barco.webp");
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
// `;
const theme = createTheme();

export default function registerPage() {

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

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {/* <Button onClick={() => setContador(contador + 1)}>
        Mudando o Contador
      </Button>
      Contador vale {contador} */}
        <Register />
        <Copyright site="Avanade" />
      </Container>
    </ThemeProvider>
  );
}

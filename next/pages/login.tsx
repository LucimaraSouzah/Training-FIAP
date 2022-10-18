import React, { useEffect, useState } from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../components/utils/Copyright/Index";
import Login from "../components/Form/Login/Index";
import Link from "next/link";

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#1565c0",
            fontSize: "16px",
            fontWeight:'bold',
            marginBottom: '20px'
          }}
        >
          <Typography component="p">Não tem cadastro?</Typography>
          <Link href="/register">Faça aqui</Link>
        </Box>
        <Copyright site="Avanade"/>
      </Container>
    </ThemeProvider>
  );
}

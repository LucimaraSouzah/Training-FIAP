import React, { FormEvent, useEffect, useState } from "react";
import {
  Typography,
  Container,
  Button,
  Avatar,
  TextField,
  Checkbox,
  Grid,
  Box,
  CssBaseline,
  FormControlLabel,
  Stack,
  Snackbar
} from "@mui/material";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type CopyProps = {
  site?: string;
};

function Copyright(props: CopyProps) {
  return (
    <Typography>
      {"Copyright © "}
      <Link color="inherit" href={`https://www.${props.site}.com.br`}>
        {props.site}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginPage() {
  const [email, setEmail] = useState<string | null | FormDataEntryValue>("");
  const [password, setPassword] = useState<
    undefined | null | string | FormDataEntryValue
  >("");
  const [open, setOpen] = useState<boolean | undefined>(false);
  const [contador, setContador] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (contador == 0) {
      document.title = `Executando useEffect a primeira vez. Contador: ${contador}`;
    } else {
      document.title = `Executoando useEffect ${contador} vezes`;
    }
    console.log(`Executou o useEfect ${contador} vezes`);
  }, [contador]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setPassword(data.get("password"));
    console.log({
      email: data.get("email"),
      senha: data.get("password"),
    });
  };

  const handleClose = () => {
    setOpen(false);
  }  

  useEffect(() => {
    if (password && password.length < 6) {
      setError(true);
      setErrorMessage("A senha deve ter no mínimo 6 caracteres");
    } else if (password){
      setError(false);
      setErrorMessage("");
      setOpen(true)
    }
  }, [password]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Usuário logado com sucesso! Aguarde...
        </Alert>
      </Snackbar>
        </Stack>
        {/* <Button onClick={() => setContador(contador + 1)}>
          Mudando o Contador
        </Button>
        Contador vale {contador} */}
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Tela de Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ m1: 1 }}>
            <TextField
              margin="normal"
              required
              id="email"
              name="email"
              fullWidth
              label="Digite o login"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              type="password"
              label="Digite a senha"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar-me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Login
            </Button>
            {error && <Typography color="error">{errorMessage}</Typography>}
          </Box>
        </Box>
        <Copyright site="Avanade" />
      </Container>
    </ThemeProvider>
  );
}

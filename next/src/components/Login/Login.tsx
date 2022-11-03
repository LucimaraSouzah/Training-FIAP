import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useEffect, useState } from "react";
import Snackbar from "../utils/Snackbar";
import axios from "axios";

export default function Login() {
  const [open, setOpen] = useState<boolean | undefined>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [email, setEmail] = useState<
    string | undefined | null | FormDataEntryValue
  >("");
  const [password, setPassword] = useState<
    undefined | null | string | FormDataEntryValue
  >("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setEmail(data.get("email"));
    setPassword(data.get("password"));
    console.log({
      email: data.get("email"),
      senha: data.get("password"),
    });
  };

  useEffect(() => {
    if (password && password.length < 6) {
      setError(true);
      setErrorMessage("A senha deve ter no mínimo 6 caracteres");
    } else if (password) {
      setError(false);
      setErrorMessage("");
      // setOpen(true);
      axios.post('http://localhost:3000/auth/login', {
        login: email,
        password
      }).then((response) => {
        console.log(response)
        if (response.status === 200) {
          setOpen(true);
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }, [password]);

  return (
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
          type="email"
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
        {open && (
          <Snackbar
            open={open}
            message="Login efetuado com sucesso"
            hide={5}
            severity="success"
          />
        )}
      </Box>
    </Box>
  );
}

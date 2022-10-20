import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useEffect, useState } from "react";
import Snackbar from "../utils/Snackbar";

export default function Register() {
  const [open, setOpen] = useState<boolean | undefined>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [password, setPassword] = useState<
    undefined | null | string | FormDataEntryValue
  >("");
  const [confirmPassword, setConfirmPassword] = useState<
    undefined | null | string | FormDataEntryValue
  >("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setPassword(data.get("password"));
    console.log({
      nome: data.get("name"),
      email: data.get("email"),
      senha: data.get("password"),
    });
  };

  useEffect(() => {
    if (password && password.length < 6) {
      setError(true);
      setErrorMessage("A senha deve ter no mínimo 6 caracteres");
    } else if (password && password !== confirmPassword) {
      setError(true);
      setErrorMessage("As senhas precisam ser iguais");
    } else if (password && password === confirmPassword) {
      setError(false);
      setErrorMessage("");
      setOpen(true);
    }
  }, [password, confirmPassword]);

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
        Tela de Cadastro
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ m1: 1 }}>
        <TextField
          margin="normal"
          required
          id="name"
          name="name"
          fullWidth
          label="Digite seu nome"
          autoComplete="name"
        />
        <TextField
          margin="normal"
          required
          id="email"
          name="email"
          fullWidth
          label="Digite o e-mail"
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
        <TextField
          margin="normal"
          required
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirme a senha"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
        >
          Cadastrar{" "}
        </Button>
        {error && <Typography color="error">{errorMessage}</Typography>}
        {open && (
          <Snackbar
            open={open}
            message="Cadastro efetuado com sucesso"
            hide={5}
            severity="success"
          />
        )}
      </Box>
    </Box>
  );
}

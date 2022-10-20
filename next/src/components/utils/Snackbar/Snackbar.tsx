import React, { useState } from "react";
import { Stack, Snackbar as Container, AlertColor } from "@mui/material";
import Alert from "../Alert"

type SnackbarProps = {
  open: boolean;
  message: string;
  severity: AlertColor
  hide: number
};

export default function Snackbar(props: SnackbarProps) {
  const [open, setOpen] = useState<boolean>(props.open);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Container open={open} autoHideDuration={props.hide * 1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.severity?props.severity:"success"} sx={{ width: "100%" }}>
          {props.message}
        </Alert>
      </Container>
    </Stack>
  );
}

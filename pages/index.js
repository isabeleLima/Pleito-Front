import { useState, useCallback, useEffect } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { cpfMask, verifyLogin } from "../services/utils";
import { useRouter } from "next/router";
import Router from "next/router";

export default function SignIn() {
  const [cpf, setCpf] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [snackbar, setSnackbar] = useState("error");
  const router = useRouter();

  useEffect(() => {
    if (router?.query.cadastro) {
      setSnackbar("success");
      setMessage("cadastro realizado com sucesso!");
      setOpen(true);
    }
  }, [router?.query.cadastro]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (verifyLogin(data) == true) {
      Router.push("./dashboard");
    } else {
      setMessage(verifyLogin(data));
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);
  
  const handleChange = useCallback(async (event) => {
    const cpf = await event.target.value;
    setCpf(cpfMask(cpf));
  }, []);

  return (
    <Grid
      container
      component="main"
      item
      xs={12}
      sm={12}
      md={12}
      sx={{
        height: "100vh",
        backgroundColor: (t) =>
          t.palette.mode === "primary" ? "primary" : "primary.main",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            borderRadius: 3,
            backgroundColor: "primary.contrastText",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            color="primary"
            sx={{
              marginBottom: 3,
            }}
          >
            Sign In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              marginRight: 2,
              marginLeft: 2,
              marginBottom: 4,
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="cpf"
                  label="CPF"
                  name="cpf"
                  autoComplete="cpf"
                  autoFocus
                  onChange={handleChange}
                  value={cpf}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Link href="/cadastro" variant="body2">
                  {"Não tem uma conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            variant="filled"
            severity={`${snackbar}`}
          >
            {`${message}`}
          </Alert>
        </Snackbar>
      </Container>
    </Grid>
  );
}

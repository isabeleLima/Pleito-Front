import { useState } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Head from 'next/head'
import Router from "next/router";

import {
  cpfMask,
  cepMask,
  verifyCadastro,
  initialFormValues,
} from "../services/utils";

export default function SignUp() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [values, setValues] = useState(initialFormValues);
  const [date, setDate] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id == "cpf") {
      setValues({ ...values, [id]: cpfMask(value) });
    } else if (id == "cep") {
      setValues({ ...values, [id]: cepMask(value) });
    } else {
      setValues({ ...values, [id]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (verifyCadastro(data) == true) {
      Router.push({
        pathname: '/',
        query: { cadastro: true },
      });
    } else {

      setMessage(verifyCadastro(data));
      setOpen(true);

    }
  };
  const handleClose = (event, reason) => {
    setOpen(false);
  };

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
      <Head>
        <title>Pleito - Cadastro</title>
      </Head>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            marginBottom: 5,
            flexDirection: "column",
            display: "flex",
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
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              marginRight: 2,
              marginLeft: 2,
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="fullName"
                  label="NOME COMPLETO"
                  name="fullName"
                  autoComplete="fullName"
                  autoFocus
                  onChange={handleChange}
                  value={values.fullName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="cpf"
                  label="CPF"
                  name="cpf"
                  autoComplete="cpf"
                  autoFocus
                  onChange={handleChange}
                  value={values.cpf}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider fullWidth dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="DATA NASC"
                    fullWidth
                    openTo="day"
                    views={["year", "month", "day"]}
                    value={date}
                    disableFuture
                    inputFormat="dd/MM/yyyy"
                    onChange={(newDate) => {
                      setDate(newDate);
                    }}
                    
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="dataNasc"
                        name="dataNasc"
                        fullWidth
                        margin="normal"
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="cep"
                  label="CEP"
                  name="cep"
                  autoComplete="cep"
                  autoFocus
                  onChange={handleChange}
                  value={values.cep}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="state"
                  label="STATE"
                  name="state"
                  autoComplete="state"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="city"
                  label="CITY"
                  name="city"
                  autoComplete="city"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="street"
                  label="STREET"
                  name="street"
                  autoComplete="street"
                  autoFocus
                  onChange={handleChange}
                  value={values.street}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  margin="normal"
                  fullWidth
                  type="number"
                  id="number"
                  label="N°"
                  name="number"
                  autoComplete="number"
                  autoFocus
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
            </Grid>
          </Box>
        </Box>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} variant="filled" severity="error">
            {`${message}`}
          </Alert>
        </Snackbar>
      </Container>
    </Grid>
  );
}

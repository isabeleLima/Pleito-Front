import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Header from "../components/header";
import ItemCandidato from "../components/itemCandidato";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AddCandidato from "../components/adicionarCandidatos";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { verifyAdd, initialFormAddValues } from "../services/utils";
import Router from "next/router";

function DashboardContent() {
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(initialFormAddValues);
  const [snackbar, setSnackbar] = useState("error");
  const [message, setMessage] = useState("");
  const candidatos = [0,1,2,3];
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(dateStart);
    if (verifyAdd(data) == true) {
      Router.push({
        pathname: './dashboard',
        query: { cadastro: true },
      });
    } else {
      setMessage(verifyAdd(data));
      setOpen(true);
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header></Header>
      <Box
        component="form"
        sx={{
          backgroundColor: (t) =>
            t.palette.mode === "primary" ? "primary" : "primary.contrastText",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
        onSubmit={handleSubmit}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, alignItems: "center" }}>
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12} md={10} lg={10}>
              <Typography
                component="h4"
                variant="h7"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 1,
                }}
              >
                ADICIONAR NOVO PLEITO
              </Typography>
              <Paper
                sx={{
                  p: 2,
                  backgroundColor: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  border: 1,
                  borderRadius: 0,
                  borderColor: "primary.main",
                }}
              >
                <Grid
                  container
                  spacing={1}
                  sx={{
                    display: "flex",
                    flexDirection: "inline",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Grid item xs={12} sm={12}>
                      <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        label="NOME DO PLEITO"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        margin="normal"
                        type="number"
                        fullWidth
                        id="number"
                        label="N° DE CANDIDATOS"
                        name="number"
                        autoComplete="number"
                        autoFocus
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <LocalizationProvider
                        fullWidth
                        dateAdapter={AdapterDateFns}
                      >
                        <DatePicker
                          disableFuture
                          label="DATA INICIO"
                          fullWidth
                          openTo="day"
                          views={["year", "month", "day"]}
                          inputFormat="dd/MM/yyyy"
                          value={dateStart}
                          onChange={(newValue) => {
                            setDateStart(newValue);
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              id="dataStart"
                              name="dataStart"
                              fullWidth
                              margin="normal"
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <LocalizationProvider
                        fullWidth
                        dateAdapter={AdapterDateFns}
                      >
                        <DatePicker
                          disableFuture
                          label="DATA FIM"
                          fullWidth
                          openTo="day"
                          views={["year", "month", "day"]}
                          inputFormat="dd/MM/yyyy"
                          value={dateEnd}
                          onChange={(newValue) => {
                            setDateEnd(newValue);
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              id="dataEnd"
                              name="dataEnd"
                              fullWidth
                              margin="normal"
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ ml: 5 }}>
                    <Typography
                      component="h5"
                      variant="h7"
                      sx={{
                        fontWeight: "bold",
                        marginBottom: 1,
                      }}
                    >
                      CANDIDATOS ADICIONADOS
                    </Typography>
                    <Grid item xs={12} sm={12}>
                      <AddCandidato></AddCandidato>
                      <List
                        sx={{
                          width: "100%",
                          position: "relative",
                          overflow: "auto",
                          maxHeight: 200,
                        }}
                      >
                        {[0, 1, 2].map((sectionId) => (
                          <ItemCandidato
                            key={sectionId}
                            remove={true}
                            id={sectionId}
                          ></ItemCandidato>
                        ))}
                      </List>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Grid item xs={12} sm={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        ADICIONAR PLEITO
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
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
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

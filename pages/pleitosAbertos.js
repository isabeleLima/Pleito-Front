import { useState, useCallback } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Header from "../components/header";
import ItemPleito from "../components/itemPleito";
import List from "@mui/material/List";

function DashboardContent() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header></Header>
      <Box
        component="main"
        sx={{
          backgroundColor: (t) =>
            t.palette.mode === "primary" ? "primary" : "primary.contrastText",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
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
                  PLEITOS ABERTOS
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
                <List sx={{width: "100%",}}>
                  <ItemPleito
                  done={false}
                  >
                  </ItemPleito>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      light: "#9CD918",
      main: "#53A62D",
      dark: "#458c24",
      contrastText: "#EAF2CE",
      grayText:"#707365"
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
       <meta name="viewport" content="viewport-fit=cover, initial-scale=0.8" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

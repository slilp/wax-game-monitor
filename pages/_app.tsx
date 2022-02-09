import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { Layout } from "../components/organisms";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3b6fba",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

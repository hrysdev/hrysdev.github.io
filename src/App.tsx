// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "@fontsource/noto-sans-jp/700.css";
import "@fontsource/noto-sans-jp/800.css";
import "@fontsource/noto-sans-jp/900.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";

export default function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#e6fbff",
        paper: "#e6fbff",
      },
    },
    typography: {
      fontFamily: "Noto Sans JP",
      fontWeightBold: 900,
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            "&.MuiContainer-maxWidthSm": {
              maxWidth: "768px",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" sx={{ my: 9 }}>
        <Post />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

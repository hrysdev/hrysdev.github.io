// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "@fontsource/noto-sans-jp/700.css";
import "@fontsource/noto-sans-jp/800.css";
import "@fontsource/noto-sans-jp/900.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Works from "./components/Works";
import Links from "./components/Links";

export default function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#f5f5f5",
        paper: "#f5f5f5",
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
      <Container maxWidth="sm">
        <Box sx={{ my: 9, userSelect: "none" }}>
          <Stack spacing={2} textAlign="center" sx={{ mb: 3 }}>
            <Typography variant="h4" fontWeight="bold" letterSpacing={2}>
              HrysDev's Works
            </Typography>
            <Typography letterSpacing={1}>
              趣味で行っている個人開発をまとめた、ブログ風のポートフォリオサイトです。
            </Typography>
          </Stack>
          <Links />
        </Box>
        <Works />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

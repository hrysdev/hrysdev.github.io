// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "@fontsource/noto-sans-jp/700.css";
import "@fontsource/noto-sans-jp/800.css";
import "@fontsource/noto-sans-jp/900.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";
import HeaderAppBar from "./components/HeaderAppBar";
import Home from "./pages/Home";

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Noto Sans JP",
      fontWeightBold: 900,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderAppBar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "@fontsource/noto-sans-jp/500.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Noto Sans JP",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Footer />
    </ThemeProvider>
  );
}

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "@fontsource/noto-sans-jp/600.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";
import HeaderAppBar from "./components/HeaderAppBar";

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Noto Sans JP",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderAppBar />
      <Container>
        <ProjectGrid />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

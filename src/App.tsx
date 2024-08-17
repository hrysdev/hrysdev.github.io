// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "@fontsource/noto-sans-jp/500.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import ProjectList from "./components/ProjectGrid";

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Noto Sans JP",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <ProjectList />
      </Container>
    </ThemeProvider>
  );
}

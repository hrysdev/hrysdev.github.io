import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Header() {
  return (
    <AppBar
      color="transparent"
      position="fixed"
      elevation={0}
      sx={{ backdropFilter: "blur(5px)" }}
    >
      <Container maxWidth="md" disableGutters>
        <Toolbar>
          <Box
            component="img"
            alt="HrysDev."
            src="/logo.png"
            sx={{ maxHeight: 400, maxWidth: 100 }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

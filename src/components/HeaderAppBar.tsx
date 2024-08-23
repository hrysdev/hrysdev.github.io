import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function HeaderAppBar() {
  return (
    <AppBar
      color="transparent"
      position="fixed"
      elevation={0}
      sx={{ backdropFilter: "blur(5px)" }}
    >
      <Container maxWidth="md" disableGutters>
        <Toolbar>
          <Typography variant="h6">ポートフォリオ</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

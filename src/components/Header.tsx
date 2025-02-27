import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

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
          <IconButton href="/" sx={{ mr: 1 }}>
            <Avatar alt="HrysDev" src="avatar.svg" />
          </IconButton>
          <Typography variant="h6" fontStyle="oblique">HrysDev</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

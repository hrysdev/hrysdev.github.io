import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <Box
      sx={{
        userSelect: "none",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 5 }}>
          HrysDev
        </Typography>
        <Typography variant="subtitle1">AIエンジニア</Typography>
      </Container>
    </Box>
  );
}

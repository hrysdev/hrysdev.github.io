import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Works from "./Works";
import Links from "./Links";

export default function Main() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 9, userSelect: "none" }}>
        <Stack direction="column" spacing={1} textAlign="center" sx={{ mb: 3 }}>
          <Typography variant="h4" fontWeight="bold" letterSpacing={2}>
            HrysDev's Works
          </Typography>
          <Typography letterSpacing={1}>
            ここは、趣味で行っている個人開発をまとめたポートフォリオサイトです。
          </Typography>
        </Stack>
        <Links />
      </Box>
      <Works />
    </Container>
  );
}

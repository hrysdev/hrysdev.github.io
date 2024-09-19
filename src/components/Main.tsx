import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const works = [
  {
    title: "寿司打トラッカー",
    date: "2024/08/10",
    imgPath: "./320x320.png",
  },
  {
    title: "プロジェクトタイトル",
    date: "xxxx/xx/xx",
    imgPath: "./320x320.png",
  },
  {
    title: "プロジェクトタイトル",
    date: "xxxx/xx/xx",
    imgPath: "./320x320.png",
  },
  {
    title: "プロジェクトタイトル",
    date: "xxxx/xx/xx",
    imgPath: "./320x320.png",
  },
  {
    title: "プロジェクトタイトル",
    date: "xxxx/xx/xx",
    imgPath: "./320x320.png",
  },
  {
    title: "プロジェクトタイトル",
    date: "xxxx/xx/xx",
    imgPath: "./320x320.png",
  },
  {
    title: "プロジェクトタイトル",
    date: "xxxx/xx/xx",
    imgPath: "./320x320.png",
  },
  {
    title: "プロジェクトタイトル",
    date: "xxxx/xx/xx",
    imgPath: "./320x320.png",
  },
  {
    title: "プロジェクトタイトル",
    date: "xxxx/xx/xx",
    imgPath: "./320x320.png",
  },
];

export default function Main() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 9, userSelect: "none" }}>
        <Stack direction="column" spacing={2} textAlign="center">
          <Typography variant="h4" fontWeight="bold" letterSpacing={2}>
            HrysDev's Works
          </Typography>
          <Typography letterSpacing={1}>
            ここは、趣味で行っている個人開発をまとめたポートフォリオサイトです。
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: "flex", justifyContent: "center", mt: 4 }}
        >
          <IconButton size="large" target="_blank" href="https://x.com/hrysdev">
            <XIcon />
          </IconButton>
          <IconButton
            size="large"
            target="_blank"
            href="https://github.com/hrysdev"
          >
            <GitHubIcon />
          </IconButton>
        </Stack>
      </Box>
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {works.map((work, i) => {
          return (
            <Grid item xs={6} md={4} key={i}>
              <Card sx={{ position: "relative" }}>
                <CardActionArea sx={{ position: "relative" }}>
                  <CardMedia component="img" image={work.imgPath}></CardMedia>
                  <CardContent
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      pl: 4,
                      pb: 4,
                      bgcolor: "rgba(0, 0, 0, 0.6)",
                      opacity: 0,
                      transition: "opacity 0.3s",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Typography lineHeight={2}>{work.date}</Typography>
                    <Typography variant="h6" lineHeight={2}>
                      {work.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

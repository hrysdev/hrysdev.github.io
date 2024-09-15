import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

const works = [
  {
    title: "寿司打トラッカー",
    date: "2024/08/10",
    imgPath: "./320x320.png",
  },
  {
    title: "dummy title",
    date: "2024/09/11",
    imgPath: "./320x320.png",
  },
  {
    title: "dummy title",
    date: "2024/09/11",
    imgPath: "./320x320.png",
  },
];

export default function Main() {
  return (
    <Container maxWidth="lg">
      <Stack direction="column" spacing={3} textAlign="center" sx={{ my: 9 }}>
        <Typography variant="h4" fontWeight="bold" letterSpacing={2}>
          HrysDev's Works
        </Typography>
        <Typography letterSpacing={1}>
          ここは、趣味で行っている個人開発をまとめたポートフォリオサイトです。
        </Typography>
      </Stack>
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
                      opacity: 1,
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

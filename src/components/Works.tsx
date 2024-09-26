import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

const works = [
  {
    title: "プロジェクトタイトル",
    date: "2024/09/23",
    imgPath: "./320x320.png",
  },
  {
    title: "寿司打トラッカー",
    date: "2024/08/10",
    imgPath: "./sushi_da_tracker.png",
  },
];

export default function Works() {
  return (
    <Grid container justifyContent="center" spacing={{ xs: 3, md: 4 }}>
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
                    pl: 3,
                    pb: 3,
                    bgcolor: "rgba(0, 0, 0, 0.6)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
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
  );
}

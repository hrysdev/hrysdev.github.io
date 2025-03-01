import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
// import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const compPosts = [
  {
    title: "MUFG Data Science Champion Ship 2023に参加してみた",
    date: "2023/09/12",
    description: `
      `,
    icon: "💳",
    tags: ["SIGNATE"],
    href: "",
  },
  {
    title:
      "SIGNATE Student Cup 2023【モデリング部門】：中古車の価格予測チャレンジに参加してみた",
    date: "2023/08/24",
    description: `
      `,
    icon: "🚘",
    tags: ["SIGNATE"],
    href: "https://github.com/haru1290/signate-student-cup-2023",
  },
  {
    title: "ヘイトスピーチ検出に参加してみた",
    date: "2022/12/01",
    description: `
      `,
    icon: "💬",
    tags: ["Nishika"],
    href: "https://github.com/haru1290/nishika-hate-speech-detection",
  },
];

const otherPosts = [
  {
    title: "Vite + ReactでZenn風ポートフォリオサイトを作ってみた",
    date: "2025年03月01日",
    description: `
      `,
    icon: "💻",
    tags: ["Chrome拡張機能"],
    href: "https://github.com/hrysdev/hrysdev.github.io",
  },
  {
    title: "寿司打のスコアを記録するChrome拡張機能を作ってみた",
    date: "2024年08月10日",
    description: `
      `,
    icon: "🎮",
    tags: ["Chrome拡張機能"],
    href: "https://github.com/hrysdev/sushi-da-logger",
  },
];

export default function Post() {
  return (
    <Box>
      <Typography variant="h4" sx={{ pb: 4 }}>
        Tech
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={6}>
        {otherPosts.map((post, i) => (
          <Grid item key={i} xs={6}>
            <Card key={i} elevation={0}>
              <Stack direction="row" spacing={3}>
                <Paper
                  elevation={0}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 4,
                    backgroundColor: "#ffffff",
                  }}
                >
                  <Typography
                    variant="h3"
                    textAlign="center"
                    lineHeight={1.9}
                    width={100}
                    height={100}
                    sx={{ userSelect: "none" }}
                  >
                    {post.icon}
                  </Typography>
                </Paper>
                <CardContent sx={{ px: 0, py: 0 }}>
                  <Link
                    href={post.href}
                    target="_blank"
                    color="text.primary"
                    underline="none"
                  >
                    {post.title}
                  </Link>
                  <Typography color="text.disabled" lineHeight={2.5}>
                    {post.date}
                  </Typography>
                </CardContent>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" sx={{ pt: 8, pb: 4 }}>
        Competition
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={6}>
        {compPosts.map((post, i) => (
          <Grid item key={i} xs={6}>
            <Card key={i} elevation={0}>
              <Stack direction="row" spacing={3}>
                <Paper
                  elevation={0}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 4,
                    userSelect: "none",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <Typography
                    variant="h3"
                    textAlign="center"
                    lineHeight={1.9}
                    width={100}
                    height={100}
                    sx={{ userSelect: "none" }}
                  >
                    {post.icon}
                  </Typography>
                </Paper>
                <CardContent sx={{ px: 0, py: 0 }}>
                  <Link
                    href={post.href}
                    target="_blank"
                    color="text.primary"
                    underline="none"
                  >
                    {post.title}
                  </Link>
                  <Typography color="text.disabled" lineHeight={2.5}>
                    {post.date}
                  </Typography>
                </CardContent>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

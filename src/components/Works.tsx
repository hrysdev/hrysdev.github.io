import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const works = [
  {
    title: "タイトル",
    date: "2024年09月23日",
    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`,
    tags: ["タグ１", "タグ２"],
    imgPath: "./320x320.png",
  },
  {
    title: "タイトル",
    date: "2024年09月23日",
    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`,
    tags: ["タグ１", "タグ２"],
    imgPath: "./320x320.png",
  },
  {
    title: "寿司打ロガー（仮）",
    date: "2024年08月10日",
    description: `
      タイピングゲーム『寿司打』のスコアを半自動で記録するChrome拡張機能です。
      寿司打にはスコアを記録する機能がありませんが、この拡張機能を使えば、日々の積み重ねを簡単に記録できます。
      `,
    tags: ["Chrome拡張機能"],
    imgPath: "./sushi_da_tracker.png",
  },
];

export default function Works() {
  return (
    <Stack spacing={11}>
      {works.map((work, i) => (
        <Box>
          <Typography color="text.disabled" lineHeight={2.5}>
            {work.date}
          </Typography>
          <Card key={i} elevation={0} sx={{ display: "flex" }}>
            <CardContent sx={{ px: 0, py: 0, mr: 5 }}>
              <Link
                href="#"
                color="text.primary"
                variant="h5"
                underline="none"
                letterSpacing={1}
              >
                {work.title}
              </Link>
              <Box>
                <Link
                  href="#"
                  color="#009944"
                  variant="subtitle2"
                  underline="none"
                  lineHeight={2}
                >
                  {work.tags.join(" ")}
                </Link>
              </Box>
              <Typography
                color="text.secondary"
                lineHeight={1.8}
                letterSpacing={0.5}
                sx={{ mt: 2 }}
              >
                {work.description}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              image={work.imgPath}
              sx={{ height: 180, borderRadius: 1 }}
            />
          </Card>
        </Box>
      ))}
    </Stack>
  );
}

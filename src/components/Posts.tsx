import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const posts = [
  {
    title: "タイトル",
    date: "2024年09月23日",
    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`,
    tags: ["タグ１", "タグ２"],
    imgPath: "./320x320.png",
    href: "#",
    target: "_blank",
  },
  {
    title: "タイトル",
    date: "2024年09月23日",
    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`,
    tags: ["タグ１", "タグ２"],
    imgPath: "./320x320.png",
    href: "#",
    target: "_blank",
  },
  {
    title: "寿司打ロガー（仮）",
    date: "2024年08月10日",
    description: `
      タイピングゲーム『寿司打』のスコアを半自動で記録するChrome拡張機能です。
      寿司打にはスコアを記録する機能がありませんが、この拡張機能を使えば、日々の積み重ねを簡単に記録できます。
      `,
    tags: ["Chrome拡張機能"],
    imgPath: "./320x320.png",
    href: "https://github.com/hrysdev/sushi-da-logger",
    target: "_blank",
  },
];

export default function Posts() {
  return (
    <Stack spacing={11}>
      {posts.map((post, i) => (
        <Box>
          <Typography color="text.disabled" lineHeight={2.5}>
            {post.date}
          </Typography>
          <Card key={i} elevation={0} sx={{ display: "flex" }}>
            <CardContent sx={{ px: 0, py: 0, mr: 5 }}>
              <Link
                href={post.href}
                target={post.target}
                color="text.primary"
                variant="h5"
                underline="none"
                letterSpacing={1}
              >
                {post.title}
              </Link>
              <Box>
                <Link
                  href="#"
                  color="#3cb371"
                  variant="subtitle2"
                  underline="none"
                  lineHeight={2}
                >
                  {post.tags.join(" ")}
                </Link>
              </Box>
              <Typography
                color="text.secondary"
                lineHeight={1.8}
                letterSpacing={0.5}
                sx={{ mt: 2 }}
              >
                {post.description}
              </Typography>
              <Link
                href={post.href}
                target={post.target}
                color="#3cb371"
                underline="none"
                lineHeight={2}
              >
                Read more →
              </Link>
            </CardContent>
            <CardMedia
              component="img"
              image={post.imgPath}
              sx={{ width: 180, height: 180, borderRadius: 1 }}
            />
          </Card>
        </Box>
      ))}
    </Stack>
  );
}

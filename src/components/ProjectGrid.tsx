import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "寿司打ログ",
    date: "2024-08-18",
    content: "Chrome 拡張機能",
    path: "/320x320.png",
  },
  {
    name: "ポートフォリオサイト",
    date: "2024-08-20",
    content: "ポートフォリオサイト",
    path: "/320x320.png",
  },
  {
    name: "テキストテキストテキスト",
    date: "2024-08-20",
    content: "テキストテキストテキストテキストテキストテキストテキスト",
    path: "/320x320.png",
  },
];

export default function ProjectGrid() {
  return (
    <Grid container spacing={3}>
      {projects.map((project, i) => (
        <Grid item xs={4} key={i}>
          <ProjectCard
            name={project.name}
            date={project.date}
            content={project.content}
            path={project.path}
          />
        </Grid>
      ))}
    </Grid>
  );
}

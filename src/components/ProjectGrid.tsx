import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "寿司打ログ",
    date: "2024-08-18",
    content: "寿司打のスコアを半自動で記録する Chrome 拡張機能",
  },
  {
    name: "ポートフォリオサイト",
    date: "2024-08-20",
    content: "自分の個人開発を公開するポートフォリオサイト",
  },
  {
    name: "ポートフォリオサイト",
    date: "2024-08-20",
    content: "自分の個人開発を公開するポートフォリオサイト",
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
          />
        </Grid>
      ))}
    </Grid>
  );
}

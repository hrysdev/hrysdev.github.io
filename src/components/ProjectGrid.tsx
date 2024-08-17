import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "寿司打ログ",
    date: "2024-08-18",
    description: "寿司打のスコアを半自動で記録する Chrome 拡張機能",
  },
  {
    name: "寿司打ログ",
    date: "2024-08-18",
    description: "寿司打のスコアを半自動で記録する Chrome 拡張機能",
  },
  {
    name: "寿司打ログ",
    date: "2024-08-18",
    description: "寿司打のスコアを半自動で記録する Chrome 拡張機能",
  },
];

export default function ProjectGrid() {
  return (
    <Grid container spacing={4}>
      {projects.map((project, i) => (
        <Grid item xs={4} key={i}>
          <ProjectCard
            name={project.name}
            date={project.date}
            description={project.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}

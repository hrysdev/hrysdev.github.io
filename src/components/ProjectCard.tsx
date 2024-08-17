import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ProjectProps } from "../types/types";

export default function ProjectCard(project: ProjectProps) {
  return (
    <Card variant="outlined" elevation={0} sx={{ display: "flex" }}>
      <CardMedia component="img" image="/1280x800.png" sx={{ width: 300 }} />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {project.name}
        </Typography>
        <Typography variant="subtitle2">{project.date}</Typography>
        <Typography variant="body2">{project.description}</Typography>
      </CardContent>
    </Card>
  );
}
1;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ProjectProps } from "../types/types";

export default function ProjectCard(project: ProjectProps) {
  return (
    <Card variant="outlined" elevation={0}>
      <CardMedia component="img" image="/1280x800.png" sx={{ height: 100 }} />
      <CardContent>
        {/* <Typography component="span" variant="h6" fontWeight="bold">
          {project.name}
        </Typography>{" "}
        <Typography component="span" variant="subtitle2">
          {project.date}
        </Typography> */}
        <Typography variant="body1" lineHeight={2}>
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
1;

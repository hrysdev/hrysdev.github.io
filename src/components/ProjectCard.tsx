import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

export type ProjectProps = {
  name: string;
  date: string;
  content: string;
  path: string;
};

export default function ProjectCard(project: ProjectProps) {
  return (
    <Card variant="outlined" elevation={0} sx={{ borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia component="img" image={project.path} sx={{ height: 100 }} />
        <CardContent>
          <Typography variant="subtitle1" letterSpacing={0.16} lineHeight={2}>
            {project.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

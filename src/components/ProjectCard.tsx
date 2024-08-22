import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export type ProjectProps = {
  name: string;
  date: string;
  content: string;
};

export default function ProjectCard(project: ProjectProps) {
  return (
    <Card variant="outlined" elevation={0} sx={{ borderRadius: 5 }}>
      <CardMedia component="img" image="/1280x800.png" sx={{ height: 100 }} />
      <CardContent>
        <Typography variant="body1" letterSpacing={0.16} lineHeight={2}>
          {project.content}
        </Typography>
      </CardContent>
    </Card>
  );
}

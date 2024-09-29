import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Typography
      variant="h6"
      sx={{
        color: "text.secondary",
        textAlign: "center",
        mt: 18,
        py: 2,
      }}
    >
      &copy; 2024 HrysDev.
    </Typography>
  );
}

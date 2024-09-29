import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Typography
      variant="h6"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        color: "text.secondary",
        textAlign: "center",
        mt: 15,
        py: 2,
      }}
    >
      &copy; 2024 HrysDev.
    </Typography>
  );
}

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

const links = [
  {
    icon: <XIcon />,
    href: "https://x.com/hrysdev",
    target: "_blank",
  },
  {
    icon: <GitHubIcon />,
    href: "https://github.com/hrysdev",
    target: "_blank",
  },
];

export default function Links() {
  return (
    <Stack direction="row" justifyContent="center">
      {links.map((link, i) => (
        <IconButton key={i} size="large" href={link.href} target={link.target}>
          {link.icon}
        </IconButton>
      ))}
    </Stack>
  );
}

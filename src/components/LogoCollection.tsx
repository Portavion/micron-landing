import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";

const whiteLogos = [
  "../../public/awal_white-removebg-preview.png",
  "../../public/arts-logo-white-removebg-preview.png",
  "../../public/sony-white-removebg-preview.png",
];

const darkLogos = [
  "../../public/awal_white-removebg-preview.png",
  "../../public/arts-logo-white-removebg-preview.png",
  "../../public/sony-white-removebg-preview.png",
];

const logoStyle = {
  width: "100px",
  height: "80px",
  margin: "0 32px",
  opacity: 0.8,
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        sx={{ color: "text.secondary" }}
      >
        Trusted by the bests
      </Typography>
      <Grid container sx={{ justifyContent: "center", mt: 4, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img src={logo} style={logoStyle} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

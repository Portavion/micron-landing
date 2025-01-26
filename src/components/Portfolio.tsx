import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Spotify } from "react-spotify-embed";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const cardData = [
  {
    img: "../../public/portavion.png",
    title: "Portavion",
    description:
      "Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.",
    authors: [
      { name: "Remy Sharp", avatar: "/static/images/avatar/1.jpg" },
      { name: "Travis Howard", avatar: "/static/images/avatar/2.jpg" },
    ],
  },
  {
    img: "../../public/velw.png",
    title: "Velw",
    description:
      "Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.",
    authors: [{ name: "Erica Johns", avatar: "/static/images/avatar/6.jpg" }],
  },
  {
    img: "../../public/bastian-horro.png",
    title: "Wardt",
    description:
      "Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.",
    authors: [{ name: "Kate Morrison", avatar: "/static/images/avatar/7.jpg" }],
  },
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export function Search() {
  return (
    <FormControl sx={{ width: { xs: "100%", md: "25ch" } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: "text.primary" }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "search",
        }}
      />
    </FormControl>
  );
}

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <Container
      width={{ xs: "100%", md: "50%" }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: { xs: 1, sm: 2 },
        pb: { xs: 1, sm: 2 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pt: { xs: 1, sm: 0 },
          pb: { xs: 1, sm: 0 },
        }}
      >
        <Stack
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "100%" } }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Selected Works
          </Typography>
        </Stack>

        <Grid container spacing={3} columns={18}>
          <Grid size={{ xs: 24, md: 6 }}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(0)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 0 ? "Mui-focused" : ""}
            >
              <CardMedia
                component="img"
                image={cardData[0].img}
                sx={{
                  aspectRatio: "16 / 9",
                  height: { sm: "200px", md: "200px" },
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              />
              <SyledCardContent>
                <Typography
                  gutterBottom
                  variant="caption"
                  component="div"
                ></Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                ></Typography>
                <Spotify
                  wide
                  link="https://open.spotify.com/track/4LEC2H8OxlRh3MSynqH7jm?si=4a7a0acbb6b54cf2"
                />
              </SyledCardContent>
            </SyledCard>
          </Grid>
          <Grid size={{ xs: 24, md: 6 }}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(1)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 1 ? "Mui-focused" : ""}
            >
              <CardMedia
                component="img"
                image={cardData[1].img}
                aspect-ratio="16 / 9"
                sx={{
                  borderBottom: "1px solid",
                  height: { sm: "200px", md: "200px" },
                  borderColor: "divider",
                }}
              />
              <SyledCardContent>
                <Typography
                  gutterBottom
                  variant="caption"
                  component="div"
                ></Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                ></Typography>
                <Spotify
                  wide
                  link="https://open.spotify.com/track/4HPrw3WDkpy8l0ycnwsITw?si=3e8ec08d287a437a"
                />
              </SyledCardContent>
            </SyledCard>
          </Grid>
          <Grid size={{ xs: 24, md: 6 }}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(2)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 2 ? "Mui-focused" : ""}
              sx={{ height: "100%" }}
            >
              <CardMedia
                component="img"
                image={cardData[2].img}
                sx={{
                  height: { sm: "200px", md: "200px" },
                  aspectRatio: { sm: "16 / 9", md: "" },
                }}
              />
              <SyledCardContent>
                <Typography
                  gutterBottom
                  variant="caption"
                  component="div"
                ></Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                ></Typography>

                <Spotify
                  wide
                  link="https://open.spotify.com/track/4CApE2ocmKK5MdHCS3CYB8?si=7d7333c85bb44419"
                />
              </SyledCardContent>
            </SyledCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

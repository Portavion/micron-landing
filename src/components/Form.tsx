import * as React from "react";
import Stack from "@mui/material/Stack";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import Container from "@mui/material/Container";
const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function AddressForm() {
  const [services, setServices] = React.useState("Mastering");

  const handleChange = (event: SelectChangeEvent) => {
    setServices(event.target.value);
  };
  return (
    <Container
      sx={{
        pt: { xs: 5 },
        pb: { xs: 1 },
        width: { sm: "100%", md: "50%" },
      }}
    >
      <Stack
        useFlexGap
        sx={{ alignItems: "center", width: { xs: "100%", sm: "100%" } }}
      >
        <Typography component="h2" variant="h4" gutterBottom>
          Let's work on your next track!
        </Typography>
      </Stack>
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <FormGrid
          size={{ xs: 12, md: 12 }}
          sx={{
            pt: { xs: 1 },
            pb: { xs: 1 },
          }}
        >
          <FormLabel htmlFor="name" required>
            Name
          </FormLabel>
          <OutlinedInput
            id="name"
            name="name"
            type="name"
            placeholder="John"
            autoComplete="first name"
            required
            size="small"
          />
        </FormGrid>
        <FormGrid
          size={{ xs: 12, md: 24 }}
          sx={{
            pt: { xs: 1 },
            pb: { xs: 1 },
          }}
        >
          <FormLabel htmlFor="email" required>
            E-mail
          </FormLabel>
          <OutlinedInput
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="johndoe@email.com"
            required
            size="small"
          />
        </FormGrid>
        <FormGrid
          size={{ xs: 12, md: 24 }}
          sx={{
            pt: { xs: 1 },
            pb: { xs: 1 },
          }}
        >
          <FormLabel htmlFor="services">Services needed</FormLabel>
          <Select
            labelId="services"
            id="services"
            label="Services"
            value={services}
            onChange={handleChange}
          >
            <MenuItem value={"Mastering"}>Mastering</MenuItem>
            <MenuItem value={"Mixing + Mastering"}>Mixing + Mastering</MenuItem>
            <MenuItem value={"Mixing"}>Mixing</MenuItem>
          </Select>
        </FormGrid>
        <FormGrid
          size={{ xs: 12, md: 24 }}
          sx={{
            pt: { xs: 1 },
            pb: { xs: 1 },
          }}
        >
          <FormLabel htmlFor="track">Number of tracks</FormLabel>
          <OutlinedInput
            id="track"
            name="track"
            type="number"
            placeholder="1"
            size="small"
          />
        </FormGrid>
        <FormGrid
          size={{ xs: 12, md: 24 }}
          sx={{
            pt: { xs: 1 },
            pb: { xs: 1 },
          }}
        >
          <FormLabel htmlFor="streaming">
            Where can I listen to some of your work?
          </FormLabel>
          <OutlinedInput
            id="streaming"
            name="streaming"
            type="url"
            placeholder="http://soundcloud.com/johndoe"
            size="small"
          />
        </FormGrid>
        <FormGrid
          size={{ xs: 12, md: 24 }}
          sx={{
            pt: { xs: 2 },
          }}
        >
          <Button
            color="secondary"
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}
            sx={{
              pt: { xs: 1 },
              pb: { xs: 1 },
              width: { sm: "100%", md: "20%" },
              margin: "auto",
            }}
          >
            Send
          </Button>
        </FormGrid>
      </form>
    </Container>
  );
}

import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import LogoCollection from "./components/LogoCollection";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <>
      <AppTheme {...props}>
        <CssBaseline enableColorScheme />
        <AppAppBar />

        <Hero />

        <div>
          <LogoCollection />
          {/* <Features /> */}
          <Divider />
          <Portfolio />
          <Divider />
          {/* <Testimonials /> */}
          {/* <Divider /> */}
          {/* <Highlights /> */}
          <Form />
          <Divider />
          {/* <Pricing /> */}
          {/* <Divider /> */}
          {/* <FAQ /> */}
          {/* <Divider /> */}
          <Footer />
        </div>
      </AppTheme>
    </>
  );
}

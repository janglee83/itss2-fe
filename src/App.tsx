import { CssBaseline, StyledEngineProvider } from "@mui/material";
import Routes from "./routes";
import NavbarComponent from "./layouts/Navbar";
import FooterComponent from "./layouts/Footer";

export default function App(): JSX.Element {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      {/* <Provider> */}
      <NavbarComponent />
      <Routes />
      <FooterComponent />
      {/* </Provider> */}
    </StyledEngineProvider>
  );
}

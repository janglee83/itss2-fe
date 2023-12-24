import {
  Backdrop,
  CircularProgress,
  CssBaseline,
  StyledEngineProvider,
} from "@mui/material";
import Routes from "./routes";
import NavbarComponent from "./layouts/Navbar";
import FooterComponent from "./layouts/Footer";
import { type RootState } from "./state/store";
import { useSelector } from "react-redux";

export default function App(): JSX.Element {
  const universe = useSelector((state: RootState) => state.universe);

  return (
    <StyledEngineProvider injectFirst>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={universe.isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <CssBaseline />
      {/* <Provider> */}
      <NavbarComponent />
      <Routes />
      <FooterComponent />
      {/* </Provider> */}
    </StyledEngineProvider>
  );
}

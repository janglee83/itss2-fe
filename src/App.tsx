import {
  Backdrop,
  CircularProgress,
  CssBaseline,
  StyledEngineProvider,
} from "@mui/material";
import { useSelector } from "react-redux";
import MainRoutes from "./routes/MainRoutes";
import { type RootState } from "./state/store";

export default function App(): JSX.Element {
  const universe = useSelector((state: RootState) => state.universe);

  return (
    <StyledEngineProvider injectFirst>
      {/* <BrowserRouter> */}
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
      <MainRoutes />
      {/* </Provider> */}
      {/* </BrowserRouter> */}
    </StyledEngineProvider>
  );
}

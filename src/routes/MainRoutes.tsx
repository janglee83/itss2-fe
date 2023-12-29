/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "layouts/Navbar";
import FooterComponent from "layouts/Footer";
import routes from "./listRoutes";

export default function MainRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <div id="container" style={{ minHeight: "100vh", paddingBottom: "35px" }}>
        <NavbarComponent />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children?.map((childRoute, childIndex) => (
                  <Route
                    key={childIndex}
                    path={childRoute.path}
                    element={childRoute.element}
                  />
                ))}
              </Route>
            ))}
          </Routes>
        </Suspense>
      </div>
      <div id="footer" style={{ marginTop: "-35px" }}>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

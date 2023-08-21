import React from "react";
import { Route, Routes } from "react-router-dom";
const RouterView = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route) =>
        route.isRouter ? (
          <Route key={route.path} path={route.path} element={route.element} />
        ) : null
      )}
    </Routes>
  );
};

export default RouterView;

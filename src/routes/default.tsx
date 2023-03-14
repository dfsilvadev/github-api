import { Route, Routes } from "react-router-dom";

import { Base } from "../template";

import { HomePage } from "../pages";

const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default BaseRoutes;

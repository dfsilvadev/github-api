import { Route, Routes } from "react-router-dom";

import { Base } from "../template";

const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<h1>Home</h1>} />
      </Route>
    </Routes>
  );
};

export default BaseRoutes;

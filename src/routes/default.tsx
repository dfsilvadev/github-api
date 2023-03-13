import { Route, Routes } from "react-router-dom";

import { Base } from "../template";
import { Button } from "../components";

const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route
          index
          element={<Button onClick={() => console.log(false)}>Search</Button>}
        />
      </Route>
    </Routes>
  );
};

export default BaseRoutes;

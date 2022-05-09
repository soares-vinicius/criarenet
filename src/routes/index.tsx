import { Routes as RoutesDom, Route } from "react-router-dom";
import Create from "../pages/create";
import Edit from "../pages/edit";
import Home from "../pages/home";

export default function Routes(): React.ReactElement {
  return (
    <RoutesDom>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit" element={<Edit />} />
    </RoutesDom>
  );
}

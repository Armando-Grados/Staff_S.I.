import { createBrowserRouter } from "react-router-dom";
import Stuff from "./pages/staff";
import Error from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Stuff />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

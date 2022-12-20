import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutMe from "./containers/AboutMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-me",
    element: <AboutMe />,
  }
])


export default router;

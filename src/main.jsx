import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";
import Nav from "./components/Nav.jsx";
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Resume from "./pages/Resume.jsx";
import Portfolio from "./pages/Portfolio.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <App />
  </StrictMode>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

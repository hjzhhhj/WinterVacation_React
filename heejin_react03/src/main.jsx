import { createRoot } from "react-dom/client";
import App1 from "./App1.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App1 />
  </BrowserRouter>
);

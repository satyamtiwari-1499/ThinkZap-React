import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContextPage from "./Context/ContextPage.jsx";

createRoot(document.getElementById("root")).render(
  <ContextPage>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextPage>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const root = createRoot(document.getElementById('appMain'))
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

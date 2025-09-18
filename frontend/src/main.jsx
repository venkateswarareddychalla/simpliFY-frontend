
import { createRoot } from "react-dom/client";
import "./index.css";
import 'antd/dist/reset.css';
import App from "./App.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

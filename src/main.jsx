import App from "./App.jsx";
import MyState from "./context/MyState";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyState>
      <App />
    </MyState>
  </BrowserRouter>
);

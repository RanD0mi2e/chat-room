import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./App.css";
import { ThemeProvider } from "./Contexts/ThemeContext";

function App() {
  return (
    <div className="app-container">
      {/* 主题色context */}
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;

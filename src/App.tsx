import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./App.css";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { UserProvider } from "./Contexts/UserContext";

function App() {
  return (
    <div className="app-container">
      <UserProvider>
        {/* 主题色context */}
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;

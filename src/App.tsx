import { RouterProvider } from "react-router-dom";
import { createRouter, routes } from "./router/router";
import "./App.css";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { UserProvider } from "./Contexts/UserContext";
import { useState } from "react";

function App() {
  const [router] = useState(createRouter(routes));

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

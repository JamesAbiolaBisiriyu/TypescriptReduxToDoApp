

import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import React, { useState } from "react";
import "./assets/styles.css";


const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="container">
      <h1>James Todo List</h1>
      <div id="theme-toggle">
        <button
          id="dark-mode-btn"
          type="button"
          onClick={() => setDarkMode((d) => !d)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;

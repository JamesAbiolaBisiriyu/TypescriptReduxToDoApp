

import AddTask from "./component/AddTask";
import ListTask from "./component/ListTask";
import React, { useState } from "react";
import "./assets/styles.css";


function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

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
}

export default App;

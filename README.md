# Todo Application (React + Redux Toolkit)

This project is a modern Todo List application built with React, Redux Toolkit, and TypeScript. It demonstrates best practices in component structure, state management, and UI design, and is fully commented for easy understanding and maintainability.

## Features

- **Add a new todo:** Users can add tasks with a description.
- **Edit a task:** Inline editing of task descriptions.
- **Mark as done/not done:** Toggle completion status for each task.
- **Filter tasks:** View all, active, or completed tasks using filter buttons.
- **Clear completed:** Remove all completed tasks with one click.
- **Dark mode:** Toggle between light and dark themes.

## Project Structure

```
src/
  assets/styles.css         # Main CSS for the app (light/dark mode, layout, etc.)
  Components/
    AddTask.tsx             # Form for adding new tasks
    ListTask.tsx            # Renders filter buttons, task list, and clear completed
    Task.tsx                # Single task with edit, complete, delete controls
  redux/
    features/todoSlice.ts   # Redux slice for todos (actions, reducers, types)
    store.ts                # Redux store configuration
  App.tsx                   # Main app layout and theme toggle
  main.tsx                  # React entry point, Redux Provider
```

## How It Works

- **Redux State:**
  - All tasks and filter state are managed globally using Redux Toolkit.
  - Each task has an `id`, `description`, and `isDone` status.
  - Actions include: addTask, editTask, toggleTask, setFilter, clearCompleted.

- **Component Breakdown:**
  - `AddTask`: Controlled input and form for adding new todos.
  - `ListTask`: Renders filter buttons, the list of tasks, and the clear completed button.
  - `Task`: Handles displaying, editing, toggling, and (placeholder for) deleting a single task.

- **Styling:**
  - All UI is styled with a single CSS file for consistency and easy theming.
  - Responsive and accessible design.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the app in development:**
   ```sh
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Customization & Maintenance

- All code is thoroughly commented for easy onboarding and future maintenance.
- To add features (e.g., delete task), extend the Redux slice and update the UI components.
- To change the theme or layout, edit `src/assets/styles.css`.

## License

MIT
},
},
])

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````

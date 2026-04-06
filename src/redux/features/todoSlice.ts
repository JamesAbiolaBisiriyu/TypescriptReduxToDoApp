import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

/**
 * Task type definition
 * @property id - Unique identifier for the task
 * @property description - The task description
 * @property isDone - Completion status
 */
export type Task = {
  id: number;
  description: string;
  isDone: boolean;
};

/**
 * TodoState type definition
 * @property tasks - Array of tasks
 * @property filter - Current filter ('all', 'done', 'not')
 */
interface TodoState {
  tasks: Task[];
  filter: 'all' | 'done' | 'not';
}

// Initial state for the todo slice
const initialState: TodoState = {
  tasks: [],
  filter: 'all',
};

/**
 * Redux slice for todo state management
 * Handles adding, toggling, editing, filtering, and clearing tasks
 */
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    /**
     * Add a new task
     * @param state - Current state
     * @param action - Payload is the task description
     */
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now(),
        description: action.payload,
        isDone: false,
      };
      state.tasks.push(newTask);
    },
    /**
     * Toggle the completion status of a task
     * @param state - Current state
     * @param action - Payload is the task id
     */
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    /**
     * Edit a task's description
     * @param state - Current state
     * @param action - Payload is { id, description }
     */
    editTask: (state, action: PayloadAction<{ id: number; description: string }>) => {
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) task.description = action.payload.description;
    },
    /**
     * Set the current filter
     * @param state - Current state
     * @param action - Payload is the filter value
     */
    setFilter: (state, action: PayloadAction<'all' | 'done' | 'not'>) => {
      state.filter = action.payload;
    },
    /**
     * Remove all completed tasks
     * @param state - Current state
     */
    clearCompleted: (state) => {
      state.tasks = state.tasks.filter(task => !task.isDone);
    },
  },
});

// Export actions and reducer
export const { addTask, toggleTask, editTask, setFilter, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;

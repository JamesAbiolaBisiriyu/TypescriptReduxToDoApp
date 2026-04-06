import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/features/todoSlice';

/**
 * AddTask component
 * Renders a form to add a new todo task.
 * Uses Redux to dispatch the addTask action.
 */
const AddTask: React.FC = () => {
  // Local state for the input value
  const [input, setInput] = useState('');
  // Redux dispatch function
  const dispatch = useDispatch();

  /**
   * Handles form submission
   * Dispatches addTask if input is not empty, then clears input
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      {/* Input for new task description */}
      <input
        id="todo-input"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a new task..."
        required
      />
      {/* Submit button */}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;

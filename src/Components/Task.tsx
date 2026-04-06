import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/features/todoSlice';
import type { Task } from '../redux/features/todoSlice';

/**
 * Props for TaskComponent
 * @property task - The task object to display
 */
interface TaskProps {
  task: Task;
}

/**
 * TaskComponent
 * Renders a single todo task with edit, complete, and delete buttons.
 * Uses Redux to dispatch toggle and edit actions.
 */
const TaskComponent: React.FC<TaskProps> = ({ task }) => {
  const dispatch = useDispatch();
  // Local state for editing
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.description);

  /**
   * Toggle the completion status of the task
   */
  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  /**
   * Handle editing the task description
   * If editing, dispatch editTask with new description
   */
  const handleEdit = () => {
    if (isEditing && editValue.trim()) {
      dispatch(editTask({ id: task.id, description: editValue }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={task.isDone ? 'completed' : ''}>
      {/* Task description or edit input */}
      <span className="task-text">
        {isEditing ? (
          <input
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={e => e.key === 'Enter' && handleEdit()}
            autoFocus
          />
        ) : (
          task.description
        )}
      </span>
      <div>
        {/* Complete/Undo button */}
        <button className="complete-btn" onClick={handleToggle} aria-label="Complete">
          {task.isDone ? 'Undo' : 'Complete'}
        </button>
        {/* Delete button (not implemented) */}
        <button className="delete-btn" onClick={() => alert('Add delete logic!')} aria-label="Delete">
          Delete
        </button>
        {/* Edit/Save button */}
        <button onClick={handleEdit} aria-label="Edit">
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </li>
  );
};

export default TaskComponent;

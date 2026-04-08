
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, Task } from '../types';
import { setFilter, clearCompleted } from '../redux/features/todoSlice';
import TaskComponent from './Task';

/**
 * ListTask component
 * Renders the filter buttons, the list of tasks, and the clear completed button.
 * Uses Redux to select tasks and filter state, and to dispatch actions.
 */
function ListTask() {
	const dispatch = useDispatch();
	const tasks = useSelector((state: RootState) => state.todo.tasks);
	const filter = useSelector((state: RootState) => state.todo.filter);

	const filteredTasks = tasks.filter((task: Task) => {
		if (filter === 'all') return true;
		if (filter === 'done') return task.isDone;
		if (filter === 'not') return !task.isDone;
		return true;
	});

	const filterMap = [
		{ label: 'All', value: 'all' },
		{ label: 'Active', value: 'not' },
		{ label: 'Completed', value: 'done' },
	];

	const handleClearCompleted = () => {
		dispatch(clearCompleted());
	};

	return (
		<>
			{/* Filter buttons */}
			<div id="filters">
				{filterMap.map(f => (
					<button
						key={f.value}
						className={`filter-btn${filter === f.value ? ' active' : ''}`}
						data-filter={f.value}
						onClick={() => dispatch(setFilter(f.value as any))}
					>
						{f.label}
					</button>
				))}
			</div>
			{/* List of tasks */}
			<ul id="todo-list">
				{filteredTasks.map((task: Task) => (
					<TaskComponent key={task.id} task={task} />
				))}
			</ul>
			{/* Button to clear completed tasks */}
			<button id="clear-completed" onClick={handleClearCompleted}>Clear Completed</button>
		</>
	);
}

export default ListTask;

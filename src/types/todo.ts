// Centralized type aliases and interfaces for the project

export type Task = {
  id: number;
  description: string;
  isDone: boolean;
};

export interface TodoState {
  tasks: Task[];
  filter: 'all' | 'done' | 'not';
}

// Add more interfaces and type aliases as needed

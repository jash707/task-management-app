export type Task = {
  title: string;
  dueDate: string;
  status: string;
  category: string;
};

export type TaskSectionProps = {
  title: string;
  color: string;
  tasks: Task[];
  onAddTask: (newTask: Task) => void;
};

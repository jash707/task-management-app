import React, { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Typography,
  IconButton,
  Select,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddTaskDialog from "./NewTaskDialog";

export interface Task {
  title: string;
  dueDate: string;
  status: string;
  category: string;
}

export interface TaskSectionProps {
  title: string;
  color: string;
  tasks: Task[];
  onAddTask: (newTask: Task) => void;
}

export const TaskSection: React.FC<TaskSectionProps> = ({
  title,
  color,
  tasks,
  onAddTask,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [newTask, setNewTask] = useState<Task>({
    title: "",
    dueDate: "",
    status: title.toUpperCase(),
    category: "Work",
  });

  // const handleAddTask = () => {
  //   onAddTask(newTask);
  //   setNewTask({
  //     title: "",
  //     dueDate: "",
  //     status: title.toUpperCase(),
  //     category: "Work",
  //   });
  //   setShowAddTaskForm(false);
  // };

  return (
    <div
      style={{
        backgroundColor: color,
        padding: "10px",
        borderRadius: "8px",
        margin: "10px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Typography variant="h6" style={{ fontWeight: "normal" }}>
          {title} ({tasks.length})
        </Typography>
        <ExpandMoreIcon
          style={{
            transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.2s",
          }}
        />
      </div>

      {isExpanded && (
        <div style={{ marginTop: "10px" }}>
          {title.toUpperCase() === "TODO" && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                padding: "10px",
                backgroundColor: "#f0f0f0",
              }}
            >
              <AddTaskDialog />
            </div>
          )}

          {tasks.length === 0 ? (
            <Typography>No Tasks in {title}</Typography>
          ) : (
            tasks.map((task, index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.1fr 1fr 1fr 1fr auto",
                  alignItems: "center",
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                  backgroundColor: "#fdfdfd",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" style={{ marginRight: "10px" }} />
                  <Typography>{task.title}</Typography>
                </div>

                <Typography style={{ textAlign: "center" }}>
                  {task.dueDate}
                </Typography>

                <Typography
                  style={{
                    textAlign: "center",
                    padding: "5px 10px",
                    borderRadius: "8px",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  {task.status}
                </Typography>

                <Typography style={{ textAlign: "center" }}>
                  {task.category}
                </Typography>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

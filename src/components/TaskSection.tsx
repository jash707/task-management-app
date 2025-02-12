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
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [newTask, setNewTask] = useState<Task>({
    title: "",
    dueDate: "",
    status: title.toUpperCase(),
    category: "Work",
  });

  const handleAddTask = () => {
    onAddTask(newTask);
    setNewTask({
      title: "",
      dueDate: "",
      status: title.toUpperCase(),
      category: "Work",
    });
    setShowAddTaskForm(false);
  };

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
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
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
            <>
              <Button
                variant="text"
                onClick={() => setShowAddTaskForm(true)}
                style={{ color: "#6a1b9a" }}
              >
                + Add Task
              </Button>

              {showAddTaskForm && (
                <div
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}
                >
                  <TextField
                    label="Task Title"
                    value={newTask.title}
                    onChange={(e) =>
                      setNewTask({ ...newTask, title: e.target.value })
                    }
                  />
                  <TextField
                    label="Due Date"
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) =>
                      setNewTask({ ...newTask, dueDate: e.target.value })
                    }
                    InputLabelProps={{ shrink: true }}
                  />
                  <Select
                    value={newTask.category}
                    onChange={(e) =>
                      setNewTask({ ...newTask, category: e.target.value })
                    }
                  >
                    <MenuItem value="Work">Work</MenuItem>
                    <MenuItem value="Personal">Personal</MenuItem>
                  </Select>
                  <Button
                    onClick={handleAddTask}
                    variant="contained"
                    color="primary"
                  >
                    Add
                  </Button>
                  <Button
                    onClick={() => setShowAddTaskForm(false)}
                    variant="outlined"
                    color="secondary"
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </>
          )}

          {tasks.length === 0 ? (
            <Typography>No Tasks in {title}</Typography>
          ) : (
            tasks.map((task, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                  backgroundColor: "#fdfdfd",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {/* Task title and checkbox */}
                <div style={{ display: "flex", alignItems: "center", flex: 2 }}>
                  <input type="checkbox" style={{ marginRight: "10px" }} />
                  <Typography>{task.title}</Typography>
                </div>

                {/* Due Date */}
                <Typography style={{ flex: 1, textAlign: "center" }}>
                  {task.dueDate}
                </Typography>

                <Typography
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "5px 10px",
                    borderRadius: "8px",
                    color: "#fff",
                    backgroundColor: "#b2b2b2",
                  }}
                >
                  {task.status}
                </Typography>

                {/* Category */}
                <Typography style={{ flex: 1, textAlign: "center" }}>
                  {task.category}
                </Typography>

                {/* More options icon */}
                <IconButton style={{ flex: 0.5 }}>
                  <MoreVert />
                </IconButton>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

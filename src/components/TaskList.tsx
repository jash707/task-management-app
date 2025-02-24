import React, { useState } from "react";
import { Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddTaskDialog from "./NewTaskDialog";
import { TaskSectionProps } from "@/Utils/tasks.types";
import { removeData } from "../services/firebaseUtils";

const TaskList: React.FC<TaskSectionProps> = ({
  title,
  color,
  tasks,
  onAddTask,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget as HTMLButtonElement);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    // onEdit();
    handleMenuClose();
  };

  const handleDelete = (id: string) => {
    if (id) {
      removeData(`tasks/${id}`);
    }
    handleMenuClose();
  };

  return (
    <>
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
                <AddTaskDialog onAddTask={onAddTask} />
              </div>
            )}

            {tasks.length === 0 ? (
              <Typography
                sx={{
                  alignItems: "center",
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                  backgroundColor: "#fdfdfd",
                }}
              >
                No Tasks in {title}
              </Typography>
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
                    <>
                      <IconButton
                        aria-label="settings"
                        onClick={handleMenuOpen}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={handleEdit}>Edit</MenuItem>
                        <MenuItem onClick={() => handleDelete(task.id)}>
                          Delete
                        </MenuItem>
                      </Menu>
                    </>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;

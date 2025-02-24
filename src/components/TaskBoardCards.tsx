import {
  Card,
  CardHeader,
  Typography,
  IconButton,
  CardContent,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Task } from "@/Utils/tasks.types";
import { useState } from "react";
import { removeData } from "../services/firebaseUtils";

const TaskBoardCards: React.FC<Task> = ({ id, title, dueDate, category }) => {
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

  const handleDelete = () => {
    if (id) {
      removeData(`tasks/${id}`);
    }
    handleMenuClose();
  };
  return (
    <Card
      sx={{
        maxWidth: 300,
        height: "15vh",
        position: "relative",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardHeader
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        title={
          <Typography
            variant="body1"
            sx={{
              padding: "2px 4px",
              borderRadius: "4px",
              display: "inline-block",
              position: "absolute",
              top: "15px",
              left: "10px",
            }}
          >
            {title}
          </Typography>
        }
        action={
          <>
            <IconButton aria-label="settings" onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
              <MenuItem onClick={handleEdit}>Edit</MenuItem>
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
          </>
        }
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2px 15px",
          position: "relative",
        }}
      >
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {category}
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {dueDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskBoardCards;

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { MenuItem } from "@mui/material";
import { Task } from "../Utils/tasks.types";
import { editTask } from "../services/firebaseUtils";

interface UpdateTaskDialogProps {
  open: boolean;
  onClose: () => void;
  taskToEdit: Task | null;
}

const UpdateTaskDialog: React.FC<UpdateTaskDialogProps> = ({
  open,
  onClose,
  taskToEdit,
}) => {
  const [formValues, setFormValues] = useState({
    title: "",
    dueDate: "",
    category: "",
    status: "",
  });

  useEffect(() => {
    if (taskToEdit) {
      setFormValues({
        title: taskToEdit.title,
        dueDate: taskToEdit.dueDate,
        category: taskToEdit.category,
        status: taskToEdit.status,
      });
    }
  }, [taskToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (taskToEdit) {
      const updatedTask = {
        ...taskToEdit,
        ...formValues,
      } as Task;
      editTask(taskToEdit.id, updatedTask);
    }
    onClose();
  };

  const taskCategories = ["WORK", "PERSONAL", "OTHERS"];
  const taskStatus = ["TO-DO", "IN-PROGRESS", "COMPLETED"];

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Update Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="task-name"
            name="title"
            label="Task Name"
            type="text"
            fullWidth
            variant="filled"
            value={formValues.title}
            onChange={handleChange}
          />
          <TextField
            required
            margin="dense"
            id="due-date"
            name="dueDate"
            label="Due Date"
            type="date"
            fullWidth
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            value={formValues.dueDate}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            id="outlined-select-category"
            name="category"
            select
            label="Select Category"
            helperText="Please select task category"
            variant="filled"
            sx={{ marginRight: "10px" }}
            value={formValues.category}
            onChange={handleChange}
          >
            {taskCategories.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="normal"
            name="status"
            id="outlined-select-current-status"
            select
            label="Select Status"
            helperText="Please select task Status"
            variant="filled"
            value={formValues.status}
            onChange={handleChange}
          >
            {taskStatus.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" color="secondary">
            Update
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UpdateTaskDialog;

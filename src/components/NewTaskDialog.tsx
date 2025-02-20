import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { MenuItem } from "@mui/material";
import { Task } from "@/Utils/tasks.types";
interface AddTaskDialogProps {
  onAddTask: (newTask: Task) => void;
}

const AddTaskDialog: React.FC<AddTaskDialogProps> = ({ onAddTask }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log("Form Data:", formJson);
    onAddTask(formJson as Task);
    handleClose();
  };

  const taskCategories = ["WORK", "PERSONAL", "OTHERS"];
  const taskStatus = ["TO-DO", "IN-PROGRESS", "COMPLETED"];

  return (
    <React.Fragment>
      <Button color="secondary" variant="outlined" onClick={handleClickOpen}>
        ADD TASK
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>New Task</DialogTitle>
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
          />
          <TextField
            autoFocus
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
          />
          <TextField
            margin="normal"
            id="outlined-select-category"
            name="category"
            select
            label="Select"
            defaultValue="WORK"
            helperText="Please select task category"
            variant="filled"
            sx={{ marginRight: "10px" }}
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
            label="Select"
            defaultValue="TO-DO"
            helperText="Please select task Status"
            variant="filled"
          >
            {taskStatus.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" color="secondary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default AddTaskDialog;

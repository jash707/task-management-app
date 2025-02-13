import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { MenuItem } from "@mui/material";

function AddTaskDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const taskCategories = ["work", "personal", "others"];

  return (
    <React.Fragment>
      <Button color="secondary" variant="outlined" onClick={handleClickOpen}>
        ADD TASK
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        //   slotProps={{
        //     paper: {
        //       component: "form",
        //       onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
        //         event.preventDefault();
        //         const formData = new FormData(event.currentTarget);
        //         const formJson = Object.fromEntries((formData as any).entries());
        //         const email = formJson.email;
        //         console.log(email);
        //         handleClose();
        //       },
        //     },
        //   }}
      >
        <DialogTitle>New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="task name"
            label="Task Name"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="date"
            name="date"
            label="Due Date"
            type="date"
            fullWidth
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="work"
            helperText="Please select task category"
          >
            {taskCategories.map((option) => (
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
}
export default AddTaskDialog;

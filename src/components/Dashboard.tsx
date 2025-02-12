import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import Header from "./shared/Header";
import ViewToggle from "./ViewToggle";
import { Task, TaskSection } from "./TaskSection";
import { useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      title: "Interview with Design Team",
      dueDate: "2024-12-31",
      status: "TO-DO",
      category: "Work",
    },
    {
      title: "Team Meeting",
      dueDate: "2024-12-30",
      status: "IN-PROGRESS",
      category: "Personal",
    },
    {
      title: "Design a Dashboard",
      dueDate: "2024-12-31",
      status: "COMPLETED",
      category: "Work",
    },
  ]);

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };
  return (
    <div
      style={{
        backgroundColor: "#FAF9F6",
        padding: "10px",
      }}
    >
      <Header />
      <ViewToggle />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span>Filter by:</span>
          <FormControl size="small">
            <Select defaultValue="Work">
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Work">Work</MenuItem>
              <MenuItem value="Personal">Personal</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small">
            <Select defaultValue="Today">
              <MenuItem value="Any">Any</MenuItem>
              <MenuItem value="Today">Today</MenuItem>
              <MenuItem value="This Week">This Week</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <div>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <span
                    role="img"
                    aria-label="search"
                    style={{ marginRight: "5px" }}
                  >
                    🔍
                  </span>
                ),
              }}
              style={{
                width: "150px",
              }}
            />
          </div>
          <Button
            variant="contained"
            style={{ backgroundColor: "#6a1b9a", color: "white" }}
          >
            ADD TASK
          </Button>
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <TaskSection
          title="Todo"
          color="#f8bbd0"
          tasks={tasks.filter((task) => task.status === "TO-DO")}
          onAddTask={handleAddTask}
        />
        <TaskSection
          title="In-Progress"
          color="#b3e5fc"
          tasks={tasks.filter((task) => task.status === "IN-PROGRESS")}
          onAddTask={handleAddTask}
        />
        <TaskSection
          title="Completed"
          color="#c8e6c9"
          tasks={tasks.filter((task) => task.status === "COMPLETED")}
          onAddTask={handleAddTask}
        />
      </div>
    </div>
  );
};

export default Dashboard;

import { useEffect, useState } from "react";
import Header from "./shared/Header";
import ViewToggle from "./ViewToggle";
import TaskList from "./TaskList";
import TaskBoard from "./TaskBoard";
import { Task } from "../Utils/tasks.types";
import { TaskListHeaders } from "./TaskListHeaders";
import { FormControl, Select, MenuItem, TextField } from "@mui/material";
import AddTaskDialog from "./NewTaskDialog";
import { listenForTasks, storeData } from "../services/firebaseUtils";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");
  const [selectedView, setSelectedView] = useState("list");
  const [userEmail, setUserEmail] = useState<string>("");

  const handleAddTask = (newTask: Task) => {
    storeData(`tasks/${newTask.id}`, newTask);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    if (searchTerm.trim() === "") {
      setTasks(allTasks);
    } else {
      const filteredTasks = allTasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTasks(filteredTasks);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUserEmail(user.email ?? "");
        console.log("uid", uid);
      } else {
        navigate("/signin");
        console.log("user is logged out");
      }
    });

    const unsubscribe = listenForTasks((data) => {
      if (data) {
        const tasksArray = Object.values(data) as Task[];
        setAllTasks(tasksArray);
        setTasks(tasksArray);
      } else {
        setAllTasks([]);
        setTasks([]);
      }
    });

    return unsubscribe;
  }, [navigate]);

  return (
    <div
      style={{
        backgroundColor: "#FAF9F6",
        padding: "10px",
      }}
    >
      <Header userEmail={userEmail} />
      <ViewToggle
        selectedView={selectedView}
        onToggleView={(view) => setSelectedView(view)}
      />
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
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select defaultValue="Work" displayEmpty>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Work">Work</MenuItem>
              <MenuItem value="Personal">Personal</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 130 }}>
            <Select defaultValue="Today" displayEmpty>
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
              placeholder="Type to search"
              value={searchItem}
              onChange={handleInputChange}
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
                width: "200px",
              }}
            />
          </div>
          <AddTaskDialog onAddTask={handleAddTask} />
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        {selectedView === "list" ? (
          <>
            <TaskListHeaders />
            <TaskList
              title="Todo"
              color="#f8bbd0"
              tasks={tasks.filter((task) => task.status === "TO-DO")}
              onAddTask={handleAddTask}
            />
            <TaskList
              title="In-Progress"
              color="#b3e5fc"
              tasks={tasks.filter((task) => task.status === "IN-PROGRESS")}
              onAddTask={handleAddTask}
            />
            <TaskList
              title="Completed"
              color="#c8e6c9"
              tasks={tasks.filter((task) => task.status === "COMPLETED")}
              onAddTask={handleAddTask}
            />
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <TaskBoard
              title="Todo"
              color="#f8bbd0"
              tasks={tasks.filter((task) => task.status === "TO-DO")}
            />
            <TaskBoard
              title="In-Progress"
              color="#b3e5fc"
              tasks={tasks.filter((task) => task.status === "IN-PROGRESS")}
            />
            <TaskBoard
              title="Completed"
              color="#c8e6c9"
              tasks={tasks.filter((task) => task.status === "COMPLETED")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

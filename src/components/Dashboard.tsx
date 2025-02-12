import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import Header from "./shared/Header";
import ViewToggle from "./ViewToggle";

const Dashboard = () => {
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
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Work">Work</MenuItem>
              <MenuItem value="Personal">Personal</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small">
            <Select defaultValue="Today">
              <MenuItem value="">Any</MenuItem>
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
    </div>
  );
};

export default Dashboard;

import { Button } from "@mui/material";
import ListIcon from "@mui/icons-material/List"; // List icon
import ViewKanbanIcon from "@mui/icons-material/ViewKanban"; // Board icon

const ViewToggle = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        padding: "10px 20px",
      }}
    >
      <Button
        variant="text"
        startIcon={<ListIcon />}
        style={{ fontSize: "15px", fontWeight: "bold", textTransform: "none" }}
      >
        List
      </Button>
      <Button
        variant="text"
        startIcon={<ViewKanbanIcon />}
        style={{ fontWeight: "normal", textTransform: "none", color: "gray" }}
      >
        Board
      </Button>
    </div>
  );
};

export default ViewToggle;

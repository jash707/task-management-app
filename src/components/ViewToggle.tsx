import { Button } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";

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
        style={{ fontWeight: "normal", textTransform: "none", color: "gray" }}
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

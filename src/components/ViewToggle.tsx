import { Button } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";

interface ViewToggleProps {
  selectedView: string;
  onToggleView: (view: string) => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({
  selectedView,
  onToggleView,
}) => {
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
        style={{
          fontWeight: selectedView === "list" ? "bold" : "normal",
          textTransform: "none",
          color: selectedView === "list" ? "black" : "gray",
        }}
        onClick={() => onToggleView("list")}
      >
        List
      </Button>
      <Button
        variant="text"
        startIcon={<ViewKanbanIcon />}
        style={{
          fontWeight: selectedView === "board" ? "bold" : "normal",
          textTransform: "none",
          color: selectedView === "board" ? "black" : "gray",
        }}
        onClick={() => onToggleView("board")}
      >
        Board
      </Button>
    </div>
  );
};

export default ViewToggle;

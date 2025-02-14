import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import TaskBoardCards from "./TaskBoardCards";

export default function TaskBoard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "72vh",
        position: "relative",
        backgroundColor: "#f1f1f1",
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="body1"
            sx={{
              backgroundColor: "#f8bbd0",
              padding: "4px 8px",
              borderRadius: "4px",
              display: "inline-block",
              position: "absolute",
              top: "15px",
              left: "15px",
            }}
          >
            TO-DO
          </Typography>
        }
        sx={{ marginBottom: "20px" }}
      />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <TaskBoardCards
          title="Interview with Design Team"
          category="Work"
          dueDate="Today"
          status={""}
        />
        <TaskBoardCards
          title="Interview with Design Team"
          category="Work"
          dueDate="Today"
          status={""}
        />
        <TaskBoardCards
          title="Interview with Design Team"
          category="Work"
          dueDate="Today"
          status={""}
        />
      </CardContent>
    </Card>
  );
}

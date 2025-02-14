import {
  Card,
  CardHeader,
  Typography,
  IconButton,
  CardContent,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Task } from "@/Utils/tasks.types";

const TaskBoardCards: React.FC<Task> = ({ title, dueDate, category }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        height: "15vh",
        position: "relative",
        borderRadius: "8px",
      }}
    >
      <CardHeader
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        title={
          <Typography
            variant="body1"
            sx={{
              padding: "2px 4px",
              borderRadius: "4px",
              display: "inline-block",
              position: "absolute",
              top: "15px",
              left: "10px",
            }}
          >
            {title}
          </Typography>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2px 15px",
          position: "relative",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {category}
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {dueDate}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default TaskBoardCards;

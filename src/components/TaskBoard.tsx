import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import TaskBoardCards from "./TaskBoardCards";
import { Task } from "../Utils/tasks.types";

interface TaskBoardProps {
  title: string;
  color: string;
  tasks: Task[];
}

export default function TaskBoard({ title, color, tasks }: TaskBoardProps) {
  return (
    <Card
      sx={{
        minWidth: 340,
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
              backgroundColor: color,
              padding: "4px 8px",
              borderRadius: "4px",
              display: "inline-block",
              position: "absolute",
              top: "15px",
              left: "15px",
            }}
          >
            {title}
          </Typography>
        }
        sx={{ marginBottom: "20px" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {tasks.length === 0 ? (
          <Typography
            sx={{
              padding: "50px",
            }}
          >
            No Tasks in {title}
          </Typography>
        ) : (
          tasks.map((task, index) => (
            <TaskBoardCards
              key={index}
              title={task.title}
              category={task.category}
              dueDate={task.dueDate}
              status={task.status}
              id={task.id}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
}

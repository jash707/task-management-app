import React from "react";
import { Typography } from "@mui/material";

export const TaskListHeaders: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr 1fr 1.1fr auto",
        padding: "10px 0",
        borderBottom: "2px solid #ddd",
        fontWeight: "bold",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Typography style={{ textAlign: "start" }}>Task Name</Typography>
      <Typography style={{ textAlign: "center" }}>Due On</Typography>
      <Typography style={{ textAlign: "center" }}>Task Status</Typography>
      <Typography style={{ textAlign: "center" }}>Task Category</Typography>
    </div>
  );
};

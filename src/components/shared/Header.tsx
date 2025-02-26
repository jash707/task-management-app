import { auth } from "../../services/firebaseConfig";
import { Typography, Avatar, Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
interface HeaderProps {
  userEmail: string;
}

const Header: React.FC<HeaderProps> = ({ userEmail }) => {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/signin");
    console.log("User signed out");
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "30px 20px 10px",
        backgroundColor: "#FAF9F6",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Typography variant="h6" fontWeight="strong" color="black">
          📋 TaskBuddy
        </Typography>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar src="/path-to-avatar.jpg" alt="User" />
        <Typography variant="body2">{userEmail}</Typography>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={logout}
        >
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import { auth } from "../services/firebaseConfig";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      navigate("/dashboard");
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: "10%",
        backgroundColor: "#FAF9F6",
      }}
    >
      <Box sx={{ textAlign: "left", maxWidth: 400 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="purple"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          📋 TaskBuddy
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 1 }}>
          Streamline your workflow and track progress effortlessly with our
          all-in-one task management app.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            borderRadius: "25px",
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            gap: 1,
            "&:hover": { backgroundColor: "#333" },
          }}
          onClick={signInWithGoogle}
        >
          <GoogleIcon sx={{ fontSize: 24, color: "white" }} />
          Continue with Google
        </Button>
      </Box>
    </Box>
  );
};

export default Auth;

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Grid, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();

    const { name, email, password } = data;

    try {
      setIsLoading(true); // Start loading animation

      const response = await axios.post("/register", {
        name,
        email,
        password,
      });

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({
          name: "",
          email: "",
          password: "",
        });
        toast.success("Registration Successful. Welcome");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during registration.");
    } finally {
      setIsLoading(false); // Stop loading animation
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "85vh",
      }}
    >
      <Paper elevation={3} style={{ padding: "2rem", width: "80%" }}>
        <h2>Register</h2>
        <form onSubmit={registerUser}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                value={data.password}
                onChange={(e) =>
                  setData({ ...data, password: e.target.value })
                }
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            style={{
              marginTop: "1rem",
              "&:hover": {
                backgroundColor: "#ff7043",
              },
            }}
          >
            Register
          </Button>

          {isLoading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <CircularProgress style={{ color: "green" }} />
            </div>
          )}
        </form>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ marginTop: "1rem", textAlign: "center" }}
        >
          If you already have an account,{" "}
          <Link to="/login">please log in</Link>.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Register;

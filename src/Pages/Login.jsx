import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; // Import Link for routing

import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const response = await axios.post('/login', {
        email,
        password
      });

      if (response.data.error) {
        // Handle login error and show a toast message
        toast.error(response.data.error);
      } else {
        // Clear form data and navigate to the desired page on successful login
        setData({});
        // Show success message using toast
        toast.success("Successfully logged in!");
        navigate('/TicketBooking');
      }
    } catch (error) {
      // Handle network or other errors
      console.error(error);
      // Show a generic error message to the user
      toast.error("An error occurred while logging in.");
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
        <h2>Login</h2>
        <form onSubmit={loginUser}>
          <Grid container spacing={2}>
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
            Login
          </Button>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ marginTop: "1rem", textAlign: "center" }}
          >
            If you don't have an account,{" "}
            <Link to="/Register">please register</Link>.
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;

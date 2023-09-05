import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ textDecoration: "none", color: "white", flexGrow: 1 }}
        >
          Ticket Booking
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/login"
          style={{ transition: "background-color 0.3s" }}
          // Add hover effect by changing the background color
          // when the button is hovered over
          className="nav-button"
        >
          Login
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/register"
          style={{ transition: "background-color 0.3s" }}
        >
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

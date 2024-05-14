import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Movies
        </Typography>
        <Button color="inherit">
          <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
            home
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/addmovies"}
          >
            Add movies
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

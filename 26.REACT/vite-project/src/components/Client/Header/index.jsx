import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const ClientHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Client
        </Typography>
        <Button color="inherit">
          <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/products"}
          >
            Products
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/contact-us"}
          >
            Contact us
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/basket"}
          >
            basket
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/user"}
          >
            user
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/login"}
          >
            Login
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/register"}
          >
            Register
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ClientHeader;

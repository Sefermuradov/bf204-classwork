import React from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  return (
    <>
      <header id={style["header"]}>
        <Container>
          <nav>
            <div className={style.logo}>
              <h1>FOUNDATION</h1>
            </div>
            <div className={style.links}>
              <Link to={"/"}>Home</Link>
              <Link to={"/addproducts"}>App Products</Link>
              <Link to={"/basket"}>Basket</Link>
            </div>
            <div className={style.bar}>
              <Link>
                <MenuIcon fontSize="medium" />
              </Link>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Header;

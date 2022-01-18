import React from "react";
import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import logo from "../../assets/commerce-logo.png";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

import useStyles from "./NavbarStyle";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            varient="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="logo"
              height="25px"
              className={classes.image}
            />
            Name of Shop
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show Cart"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

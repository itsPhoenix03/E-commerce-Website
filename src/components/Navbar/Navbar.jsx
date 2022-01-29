import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import logo from "../../assets/commerce-logo.png";
import { ShoppingCart } from "@material-ui/icons";

import useStyles from "./NavbarStyle";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

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
            style={{
              fontWeight: "700",
            }}
          >
            <img
              src={logo}
              alt="logo"
              height="25px"
              className={classes.image}
            />
            Shoppifiy
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
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
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import CartItem from "./CartItem/CartItem";

import useStyle from "./CartStyle";

const Cart = ({ cart }) => {
  const classes = useStyle();
  console.log(cart);
  const EmptyCart = () => {
    <Typography variant="subtitle1">
      You have no items in your shopping cart, start adding some!
    </Typography>;
  };

  const FilledCart = () => {
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            variant="contained"
            type="button"
            size="large"
            className={classes.emptyButton}
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            variant="contained"
            type="button"
            size="large"
            className={classes.checkoutButton}
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>;
  };

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
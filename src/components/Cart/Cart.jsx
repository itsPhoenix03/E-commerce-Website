import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import CartItem from "./CartItem/CartItem";

import useStyle from "./CartStyle";

const Cart = ({
  cart,
  handleOnUpdateCartItemQty,
  handleRemoveCartItem,
  emptyCart,
}) => {
  const classes = useStyle();

  const EmptyCart = () => (
    <Typography
      variant="subtitle1"
      style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: "20px",
        height: "65vh",
      }}
    >
      You have no items in your shopping cart,{" "}
      <Link to="/" className={classes.link}>
        start adding some!
      </Link>
    </Typography>
  );

  if (!cart.line_items) return "Loading...";

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((cartItem) => (
          <Grid item xs={12} sm={4} key={cartItem.id}>
            <CartItem
              item={cartItem}
              handleOnUpdateCartItemQty={handleOnUpdateCartItemQty}
              handleRemoveCartItem={handleRemoveCartItem}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography
          variant="h4"
          style={{
            fontFamily: "Kanit, Manrope, monospace, sans-serif",
            fontWeight: "700",
          }}
        >
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            variant="contained"
            type="button"
            size="large"
            className={classes.emptyButton}
            color="secondary"
            onClick={emptyCart}
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
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
    </>
  );

  return (
    <Container className={classes.container}>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;

import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import useStyle from "./CartItemStyle";

const CartItem = ({
  item,
  handleOnUpdateCartItemQty,
  handleRemoveCartItem,
}) => {
  const classes = useStyle();
  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            style={{ fontWeight: "bold", fontSize: "20px" }}
            onClick={() => handleOnUpdateCartItemQty(item.id, --item.quantity)}
          >
            -
          </Button>
          <Typography style={{ fontWeight: "bold" }}>
            {item.quantity}
          </Typography>
          <Button
            type="button"
            size="small"
            style={{ fontWeight: "bold", fontSize: "20px" }}
            onClick={() => handleOnUpdateCartItemQty(item.id, ++item.quantity)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => handleRemoveCartItem(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;

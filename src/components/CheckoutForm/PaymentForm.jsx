import React from "react";
import { Button, Divider, Typography } from "@material-ui/core";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

const stripePromise = loadStripe("...");

const PaymentForm = ({
  shippingData,
  checkoutToken,
  nextStep,
  backStep,
  onCaptureCheckout,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const orederData = {
      line_items: checkoutToken.live.line_items,
      customer: {
        firstname: shippingData.firstName,
        lastname: shippingData.lastName,
        email: shippingData.email,
      },
      shipping: {
        name: "Primary",
        street: shippingData.address,
        town_city: shippingData.city,
        county_state: shippingData.shippingSubDivision,
        postal_zip_code: shippingData.zip,
        country: shippingData.shippingCountry,
      },
      fulfillment: { shipping_method: shippingData.shippingOption },
    };

    onCaptureCheckout(checkoutToken.id, orederData);

    nextStep();
  };
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h5" style={{ margin: "20px 0" }}>
        Payment
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {() => (
            <form onSubmit={(e) => handleOnSubmit(e)}>
              <CardElement />
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={backStep}>
                  Back to Shipping
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;

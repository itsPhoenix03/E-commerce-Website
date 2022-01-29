import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
  CssBaseline,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { commerce } from "../../../lib/commerce";
import useStyles from "./CheckoutStyle";
import AddressFrom from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { Link } from "react-router-dom";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        setCheckoutToken(token);
      } catch (error) {
        console.log("In catch block");
      }
    };

    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => ++prevActiveStep);
  const backStep = () => setActiveStep((prevActiveStep) => --prevActiveStep);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Confirmation = () => (
    <>
      <Typography variant="h5">
        Thank You, {order.customer.firstname} {order.customer.lastname} for
        Shopping!
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>
        Hope you have a delightful experience.
      </Typography>
      <Button
        component={Link}
        to="/"
        type="button"
        variant="outlined"
        style={{ margin: "10px 0" }}
      >
        CONTINUE SHOPPING
      </Button>
    </>
  );

  const Form = () =>
    activeStep === 0 ? (
      <AddressFrom checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
      />
    );

  return (
    <div
      className={classes.container}
      style={{
        height: `${
          activeStep === steps.length
            ? "100vh"
            : isMobile && activeStep === 1
            ? "100vh"
            : ""
        }`,
        // width: `${activeStep === steps.length ? "100.50vw" : ""}`,
      }}
    >
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </div>
  );
};

export default Checkout;

import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import { commerce } from "../../lib/commerce";
import FormInput from "./CustomTextField";
import SelectInput from "./CustomSelectField";

const AddressForm = ({ checkoutToken, next }) => {
  const methods = useForm();

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubDivisions, setShippingSubDivisions] = useState([]);
  const [shippingSubDivision, setShippingSubDivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    console.log(countries);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubDivisions(subdivisions);
    setShippingSubDivision(Object.keys(subdivisions)[0]);
  };
  const subdivisions = Object.entries(shippingSubDivisions).map(
    ([code, name]) => ({ id: code, label: name })
  );

  const fetchOptions = async (checkoutTokenId, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };
  const options = shippingOptions.map((option) => ({
    id: option.id,
    label: `${option.description} - (${option.price.formatted_with_symbol})`,
  }));

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken]);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubDivision)
      fetchOptions(checkoutToken.id, shippingCountry, shippingSubDivision);
  }, [checkoutToken, shippingCountry, shippingSubDivision]);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubDivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First Name" />
            <FormInput required name="lastName" label="Last Name" />
            <FormInput required name="email" label="Email ID" />
            <FormInput required name="address" label="Shipping Address" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="ZIP / Postal Code" />
            <SelectInput
              label="Shipping Country"
              stateValue={shippingCountry}
              setState={setShippingCountry}
              value={countries}
            />
            <SelectInput
              label="Shipping Subdivisions"
              stateValue={shippingSubDivision}
              setState={setShippingSubDivision}
              value={subdivisions}
            />
            <SelectInput
              label="Shipping Options"
              stateValue={shippingOption}
              setState={setShippingOption}
              value={options}
            />
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} to="/cart" variant="outlined">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddressForm;

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Grid, TextField } from "@material-ui/core";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field: { onChange, value } }) => (
          <TextField
            onChange={onChange}
            label={label}
            fullWidth
            value={value}
            required
          />
        )}
        control={control}
        name={name}
      />
    </Grid>
  );
};

export default FormInput;

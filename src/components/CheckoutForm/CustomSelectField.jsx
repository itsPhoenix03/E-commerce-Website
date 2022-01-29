import React from "react";
import { Grid, InputLabel, MenuItem, Select } from "@material-ui/core";

const SelectField = ({ label, stateValue = "", setState, value = "" }) => {
  // if (!value || stateValue) return "Loading...";
  return (
    <Grid item xs={12} sm={6}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={stateValue}
        onChange={(e) => setState(e.target.value)}
        fullWidth
      >
        {value.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};

export default SelectField;

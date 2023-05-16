import { Grid } from "@mui/material";
import React from "react";
import Register from "../sections/auth/Register";

function RegisterPage() {
  return (
    <Grid container justifyContent="center" alignItems="center" pt="5%">
      <Grid item>
        <Register />
      </Grid>
    </Grid>
  );
}

export default RegisterPage;

import { Grid } from "@mui/material";
import React from "react";
import Login from "../sections/auth/Login";

function LoginPage() {
  return (
    <Grid container justifyContent="center" alignItems="center" pt="5%">
      <Grid item>
        <Login />
      </Grid>
    </Grid>
  );
}

export default LoginPage;

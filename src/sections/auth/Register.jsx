import styled from "@emotion/styled";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const RegisterStyle = styled(Box)((theme) => ({
  width: 350,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: 40,
  borderRadius: 10,
  border: "1px solid #b6b5b5",
}));
const TextFieldStyle = styled(TextField)(() => ({
  borderRadius: 10,
  "& .MuiOutlinedInput-input": {
    color: "#848080",
  },
  "& .MuiFormLabel-root": {
    color: "#3498db",
  },
}));

function Register() {
  return (
    <RegisterStyle
      backgroundColor="background.light"
      sx={(theme) => ({
        [theme.breakpoints.down("sm")]: {
          width: "250px",
        },
      })}
    >
      <Stack alignItems="center">
        <Typography variant="h5" color="secondary.main">
          Sign up
        </Typography>
      </Stack>
      <TextFieldStyle
        sx={{
          backgroundColor: "background.main",
        }}
        label="First name"
        maxRows={1}
        variant="outlined"
        size="small"
        color="info"
      />
      <TextFieldStyle
        sx={{ backgroundColor: "background.main" }}
        label="Last name"
        maxRows={1}
        variant="outlined"
        size="small"
        color="info"
      />
      <TextFieldStyle
        sx={{ backgroundColor: "background.main" }}
        label="Email address"
        maxRows={1}
        variant="outlined"
        size="small"
        type="email"
        color="info"
      />
      <TextFieldStyle
        sx={{ backgroundColor: "background.main" }}
        label="Password"
        maxRows={1}
        variant="outlined"
        size="small"
        type="password"
        color="info"
      />
      <Stack>
        <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: "button.main" }}
        >
          Register
        </Button>
      </Stack>
    </RegisterStyle>
  );
}

export default Register;

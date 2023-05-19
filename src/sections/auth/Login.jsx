import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterStyle = styled(Box)(() => ({
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
function Login() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  useEffect(() => {
    sessionStorage.clear();
  }, []);
  const onSubmit = (data) => {
    const validate = () => {
      let result = true;
      if (data.id === "" || data.id === null) {
        result = false;
        toast.warning("Please Enter Username");
      }
      if (data.password === "" || data.password === null) {
        result = false;
        toast.warning("Please Enter Password");
      }
      return result;
    };
    if (validate()) {
      fetch("http://localhost:8000/user/" + data.id)
        .then((res) => {
          return res.json();
        })
        .then((reap) => {
          if (Object.keys(reap).length === 0) {
            toast.error("Please Enter valid username");
          } else if (reap.password === data.password) {
            toast.success("Success");
            sessionStorage.setItem("id", data.id);
            navigate("/");
          } else {
            toast.error("Please Enter valid credentials");
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.massage);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RegisterStyle
        backgroundColor="background.light"
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            width: "250px",
            mt: 10,
          },
        })}
      >
        <Stack alignItems="center">
          <Typography variant="h5" color="secondary.main">
            Sign in
          </Typography>
        </Stack>

        <TextFieldStyle
          sx={{ backgroundColor: "background.main" }}
          label="User name"
          maxRows={1}
          variant="outlined"
          size="small"
          color="info"
          {...register("id")}
        />
        <TextFieldStyle
          sx={{ backgroundColor: "background.main" }}
          label="Password"
          maxRows={1}
          variant="outlined"
          size="small"
          type="password"
          color="info"
          {...register("password")}
        />
        <Stack>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, backgroundColor: "button.main" }}
          >
            Login
          </Button>
        </Stack>
      </RegisterStyle>
    </form>
  );
}

export default Login;

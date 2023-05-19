import styled from "@emotion/styled";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

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
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  //...............................Date
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  let hours = dateObj.getUTCHours();
  let minutes = dateObj.getUTCMinutes();
  let seconds = dateObj.getUTCSeconds();

  let date =
    year +
    "/" +
    month +
    "/" +
    day +
    "|'" +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  console.log("date", date);
  //.................................................................
  const onSubmit = (data) => {
    data.newDate = date;
    async function postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("res", response.status);
      if (response.status === 201 && 200) {
        toast.success("saved successfully");
        setInterval(() => {
          navigate("/login");
          window.location.reload();
        }, 2000);
      } else if (response.status === 500) {
        toast.error(" That username is taken");
      } else {
        toast.error("saved Failed");
      }
      return response.json();
    }
    postData("http://localhost:8000/user", data);
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
            Sign up
          </Typography>
        </Stack>
        <TextFieldStyle
          sx={{
            backgroundColor: "background.main",
          }}
          label="Full name"
          maxRows={1}
          variant="outlined"
          size="small"
          color="info"
          {...register("fullName")}
        />

        <TextFieldStyle
          sx={{ backgroundColor: "background.main" }}
          label="Email address"
          maxRows={1}
          variant="outlined"
          size="small"
          type="email"
          color="info"
          {...register("email")}
        />
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
            Register
          </Button>
        </Stack>
      </RegisterStyle>
    </form>
  );
}

export default Register;

"use client";

import React, { useState } from "react";
import { Box, Button, CssBaseline, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { blue } from "@mui/material/colors";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's just check if both username and password are not empty
    if (email && password) {
      setLoggedIn(true);
      alert("Login successful!");
    } else {
      alert("Please enter both username and password.");
    }
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("form submitted");
    //form submit logic here
  };

  return (
    <>
      <CssBaseline />
      {isLoggedIn ? (
        <h1>Welcome, {email}!</h1>
      ) : (
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
            mt: "180px",
            mx: "auto",
            py: "40px",
            px: "60px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ mb: "10px", color: `${blue[800]}`, fontWeight: 600 }}
          >
            Log into your account
          </Typography>
          <form onSubmit={formSubmitHandler}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "350px",
                height: "250px",
                mx: "auto",
                justifyContent: "space-around",
              }}
            >
              <TextField
                variant="outlined"
                label="Email"
                type="email"
                required
                fullWidth
                value={email}
                onChange={emailChangeHandler}
              />
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                required
                fullWidth
                value={password}
                onChange={passwordChangeHandler}
              />

              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: "300px",
                  height: "40px",
                  mx: "auto",
                  fontSize: 18,
                  borderRadius: "50px",
                  textTransform: "none",
                }}
              >
                Log in
              </Button>
            </Box>
          </form>
        </Paper>
      )}
    </>
  );
};

export default LoginPage;

"use client";

import React from "react";
import Navigation from "@/component/Navigation";
import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const ChangePasswordPage = () => {
  const changePasswordSubmitHandler = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    //add change password logic here
  };

  return (
    <Navigation>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "450px",
          mt: "60px",
          mx: "auto",
        }}
      >
        <Typography
          variant="h6"
          sx={{ m: "20px", color: `${blue[800]}`, fontWeight: 600 }}
        >
          Change your password
        </Typography>
        <form onSubmit={changePasswordSubmitHandler}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "250px",
              borderRadius: "8px",
              mb: "20px",
              px: "50px",
            }}
          >
            <TextField
              variant="outlined"
              label="Old Password"
              type="password"
              size="small"
              required
            />

            <TextField
              variant="outlined"
              label="New Password"
              type="password"
              size="small"
              required
            />
            <TextField
              variant="outlined"
              label="Retype New Password"
              type="password"
              size="small"
              required
            />

            <Button
              variant="contained"
              type="submit"
              sx={{ textTransform: "none" }}
            >
              Update the password
            </Button>
          </Box>
        </form>
      </Paper>
    </Navigation>
  );
};

export default ChangePasswordPage;

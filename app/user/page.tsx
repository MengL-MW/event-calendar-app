"use client";

import React from "react";
import Navigation from "@/component/Navigation";
import {
  Box,
  Paper,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";

const UserPage = () => {
  const authorityOption = {
    standard: "standard",
    admin: "admin",
  };

  const addUserSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //add User logic here
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
          Add new users
        </Typography>
        <form onSubmit={addUserSubmitHandler}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "200px",
              borderRadius: "8px",
              mb: "20px",
              px: "50px",
            }}
          >
            <TextField
              variant="outlined"
              label="User Email"
              type="email"
              size="small"
              required
            />

            <TextField select label="Authority" size="small" required>
              <MenuItem value={authorityOption.standard}>
                {authorityOption.standard}
              </MenuItem>
              <MenuItem value={authorityOption.admin}>
                {authorityOption.admin}
              </MenuItem>
            </TextField>

            <Button
              variant="contained"
              type="submit"
              sx={{ textTransform: "none" }}
            >
              Add this user
            </Button>
          </Box>
        </form>
      </Paper>
    </Navigation>
  );
};

export default UserPage;

"use client";

import React from "react";
import { Box, CssBaseline, Link } from "@mui/material";
import { grey, blue, orange } from "@mui/material/colors";

interface NavigationProps {
  children: React.ReactNode;
}

const Navigation = (props: NavigationProps) => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          px: "50px",
          py: "8px",
          // backgroundColor: `${blue[700]}`,
          background: `linear-gradient(90deg, ${blue[700]}, ${orange[50]}, ${grey[100]})`,
        }}
      >
        <Link
          href="/event-calendar"
          underline="hover"
          fontSize={13}
          sx={{
            color: `${grey[700]}`,
            fontWeight: 700,
            mx: "60px",
            backgroundColor: "white",
            borderRadius: "3px",
            px: "10px",
            py: "2px",
          }}
        >
          Event
        </Link>
        <Link
          href="/change-password"
          underline="hover"
          fontSize={13}
          sx={{
            color: `${grey[700]}`,
            fontWeight: 700,
            mr: "60px",
            backgroundColor: "white",
            borderRadius: "3px",
            px: "10px",
            py: "2px",
          }}
        >
          Change Password
        </Link>
        <Link
          href="/user"
          underline="hover"
          fontSize={13}
          sx={{
            color: `${grey[700]}`,
            fontWeight: 700,
            backgroundColor: "white",
            borderRadius: "3px",
            px: "10px",
            py: "2px",
          }}
        >
          User
        </Link>
      </Box>
      {/*
     TODO: user email 
     TODO: logout button
     */}
      {props.children}
    </>
  );
};

export default Navigation;

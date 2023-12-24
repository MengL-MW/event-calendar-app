"use client";

import React from "react";
import { grey } from "@mui/material/colors";
import { Button } from "@mui/material";

const EventDisplay = () => {
  return (
    <table
      style={{
        padding: "4px",
        border: `1px solid ${grey[400]}`,
        borderRadius: "10px",
        borderSpacing: 0,
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              borderBottom: `1px solid ${grey[400]}`,
              padding: "4px 0px 4px 0px",
            }}
          >
            Event Type
          </th>
          <th
            style={{
              borderBottom: `1px solid ${grey[400]}`,
              padding: "4px 0px 4px 0px",
            }}
          >
            Platform
          </th>
          <th
            style={{
              borderBottom: `1px solid ${grey[400]}`,
              padding: "4px 0px 4px 0px",
            }}
          >
            Station
          </th>
          <th
            style={{
              borderBottom: `1px solid ${grey[400]}`,
              padding: "4px 0px 4px 0px",
            }}
          >
            From
          </th>
          <th
            style={{
              borderBottom: `1px solid ${grey[400]}`,
              padding: "4px 0px 4px 0px",
            }}
          >
            To
          </th>
          <th
            style={{
              borderBottom: `1px solid ${grey[400]}`,
              padding: "4px 0px 4px 0px",
            }}
          ></th>
        </tr>
      </thead>

      <tbody style={{ textAlign: "center" }}>
        <tr>
          <td style={{ padding: "4px 0px 4px 0px" }}>The Edge</td>
          <td style={{ padding: "4px 0px 4px 0px" }}>Countdown</td>
          <td style={{ padding: "4px 0px 4px 0px" }}>ios</td>
          <td style={{ padding: "4px 0px 4px 0px" }}>11/12/2023</td>
          <td style={{ padding: "4px 0px 4px 0px" }}>15/12/2023</td>
          <td style={{ width: "100px", paddingTop: "4px" }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                textTransform: "none",
                fontWeight: 550,
                backgroundColor: `${grey[300]}`,
                color: `${grey[800]}`,
                "&:hover": {
                  backgroundColor: `${grey[800]}`,
                  color: `${grey[300]}`,
                },
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EventDisplay;

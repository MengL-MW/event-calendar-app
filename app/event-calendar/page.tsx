"use client";

import CsvDownload from "@/component/CsvDownload";
import EventDisplay from "@/component/EventDisplay";
import EventInput from "@/component/EventInput";
import Navigation from "@/component/Navigation";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const EventCalendarPage = () => {
  return (
    <Navigation>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "950px",
          mt: "60px",
          mx: "auto",
        }}
      >
        <EventInput />
        <EventDisplay />
        <CsvDownload />
      </Box>
    </Navigation>
  );
};

export default EventCalendarPage;

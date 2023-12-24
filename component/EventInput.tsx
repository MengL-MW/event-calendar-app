import React from "react";
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/en-gb";
import { grey, blue } from "@mui/material/colors";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";

const EventInput = () => {
  const [fromDate, setFromDate] = useState<Dayjs | null>(null);
  const [toDate, setToDate] = useState<Dayjs | null>(null);
  const [station, setStation] = useState("");
  const [eventType, setEventType] = useState("");
  const [platform, setPlatform] = useState<string[]>([]);

  const stationChangeHandler = (event: SelectChangeEvent) => {
    setStation(event.target.value);
  };
  const eventTypeChangeHandler = (event: SelectChangeEvent) => {
    setEventType(event.target.value);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const platformNames = ["Website", "Rova App", "Out of home"];

  const platformChangeHandler = (event: SelectChangeEvent<typeof platform>) => {
    const {
      target: { value },
    } = event;
    setPlatform(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "250px",
        border: `1px solid ${grey[400]}`,
        borderRadius: "8px",
        px: "50px",
        mb: "50px",
      }}
    >
      <Typography variant="h6" sx={{ color: `${blue[800]}`, fontWeight: 600 }}>
        Add new events
      </Typography>
      <Box sx={{ display: "flex" }}>
        <FormControl size="small" sx={{ mr: "20px", flex: 1 }}>
          <InputLabel id="demo-select-small-label">Station</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={station}
            label="Station"
            onChange={stationChangeHandler}
          >
            <MenuItem value={"The Edge"}>The Edge</MenuItem>
            <MenuItem value={"The Breeze"}>The Breeze</MenuItem>
            <MenuItem value={"The Rock"}>The Rock</MenuItem>
            <MenuItem value={"The George"}>The George</MenuItem>
            <MenuItem value={"The Mai"}>The Mai</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ mr: "20px", flex: 1 }}>
          <InputLabel id="demo-select-small-label">Event Type</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={eventType}
            label="Event Type"
            onChange={eventTypeChangeHandler}
          >
            <MenuItem value={"Countdown"}>Countdown</MenuItem>
            <MenuItem value={"Sponsorship"}>Sponsorship</MenuItem>
            <MenuItem value={"Activation"}>Activation</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ flex: 1 }}>
          <InputLabel id="demo-multiple-checkbox-label">Platform</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={platform}
            onChange={platformChangeHandler}
            input={<OutlinedInput label="Platform" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {platformNames.map((platformName) => (
              <MenuItem key={platformName} value={platformName}>
                <Checkbox checked={platform.indexOf(platformName) > -1} />
                <ListItemText primary={platformName} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
          <DatePicker
            label="From"
            slotProps={{ textField: { size: "small" } }}
            value={fromDate}
            onChange={(newValue) => setFromDate(newValue)}
            sx={{ mr: "20px", flex: 1 }}
          />
          <DatePicker
            label="To"
            slotProps={{ textField: { size: "small" } }}
            value={toDate}
            onChange={(newValue) => setToDate(newValue)}
            sx={{ flex: 1 }}
          />
        </LocalizationProvider>
      </Box>

      <Button
        variant="contained"
        sx={{
          width: "200px",
          mt: "5px",
          mx: "auto",
          fontSize: 17,
          textTransform: "none",
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default EventInput;

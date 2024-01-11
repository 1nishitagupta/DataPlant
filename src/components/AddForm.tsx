import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

const AddForm = () => {
  return (
    <Box p={2} maxWidth={800}>
      <form className="space-y-4">
        <div className="flex justify-between gap-6 items-center ">
          <InputLabel className="font-medium" htmlFor="title">
            Title
          </InputLabel>
          <TextField id="title" variant="outlined" size="small" />
        </div>
        <div className="flex justify-between gap-6 items-center ">
          <InputLabel className="font-medium" htmlFor="description">
            Description
          </InputLabel>
          <TextField id="description" variant="outlined" size="small" />
        </div>
        <div className="flex justify-between gap-6 items-center ">
          <InputLabel className="font-medium" htmlFor="subject">
            Subject
          </InputLabel>
          <TextField id="subject" variant="outlined" size="small" />
        </div>
        <div className="flex justify-between gap-6 items-center ">
          <InputLabel className="font-medium" htmlFor="frequency">
            Frequency
          </InputLabel>
          <FormControl variant="outlined" fullWidth>
            <Select id="frequency" fullWidth>
              <MenuItem value="Daily">Daily</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* Add other form fields based on your needs */}
        <div className="flex">
          <button className="ml-4 bg-[#391E5A] text-white py-2 px-4 rounded flex gap-3">
            Save
          </button>
          <button className="ml-4 bg-[#391E5A] text-white py-2 px-4 rounded flex gap-3">
            Cancel
          </button>
        </div>
      </form>
    </Box>
  );
};

export default AddForm;

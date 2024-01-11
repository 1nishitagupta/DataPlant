/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ScheduleList from "./components/ScheduleList";
import SearchComponent from "./components/SearchComponent";
import { Popover } from "@mui/material";
import AddForm from "./components/AddForm";

const App: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="flex w-full">
      <div className="w-16 h-screen bg-[#391E5A]">{/* Sidebar content */}</div>
      <div className="flex flex-col w-full">
        <div className="w-full bg-[#D8D2DE] h-10"></div>
        <div className="flex">
          <div className="ml-200 p-4 w-full">
            <div className="flex items-center mb-4 w-full justify-between ">
              <SearchComponent />
              <button
                className="ml-4 bg-[#391E5A] text-white py-2 px-4 rounded flex gap-3"
                onClick={handleClick}
              >
                <AddCircleOutlineIcon /> Add
              </button>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left", // Adjusted to start from the left
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right", // Adjusted to start from the right
                }}
              >
                <AddForm />
              </Popover>
            </div>
            <ScheduleList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { Button } from "@mui/material";
import "./Date.css";
import { useState } from "react";
import Search from "./Search";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Date = () => {
  const [showSearch, setShowSearch] = useState(true);

  return (
    <div className="date__search">
      {showSearch && <Search />}

      <Button
        className="date__searchButton"
        variant="outlined"
        onClick={() => setShowSearch(!showSearch)}
      >
        Search Dates
      </Button>
    </div>
  );
};

export default Date;

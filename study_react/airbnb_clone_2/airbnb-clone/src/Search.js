import React from "react";
import "./Search.css";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const seletionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelection = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="search">
      <DateRangePicker ranges={[seletionRange]} onchange={handleSelection} />
    </div>
  );
};

export default Search;

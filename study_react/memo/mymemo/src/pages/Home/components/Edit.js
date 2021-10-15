import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [title, setTitle] = useState("");
  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const [date, setDate] = useState("");
  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const [time, setTime] = useState("");
  const timeChange = (e) => {
    setTime(e.target.value);
  };

  const addItem = () => {
    add(function (prevdata) {
      return [{ id: v4(), title, date, time }, ...prevdata];
    });
  };

  return (
    <div>
      <h1>Reminder</h1>
      <p>Title</p>
      <input type="text" value={title} onChange={titleChange} />
      <p>Date</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>Time</p>
      <input type="time" value={time} onChange={timeChange} />
      <button className="add" onClick={addItem}>
        New Reminder
      </button>
    </div>
  );
};

export default Edit;

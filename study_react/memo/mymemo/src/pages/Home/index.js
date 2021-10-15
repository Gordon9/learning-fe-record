import Edit from "./components/Edit";
import List from "./components/List";
import { useState } from "react";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]);

  return (
    <div>
      <Edit add={setData} />
      <List listdata={data} />
    </div>
  );
};

export default Home;

import Edit from "./components/Edit";
import List from "./components/List";
import { useEffect, useState } from "react";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts/1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Edit add={setData} />
      <List listdata={data} deleteData={setData} />
    </div>
  );
};

export default Home;

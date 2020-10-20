import React, { useState } from "react";
import Hello from "./sayHello";
import Tweet from "./Tweet";
import "./App.css";

function App() {
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);
  // };

  const [users, setUsers] = useState([
    { name: "Gordon", message: "Hello Root!" },
    { name: "Root", message: "Hello Back!" },
    { name: "Fench", message: "You are being watched!" },
  ]);

  return (
    <div className="app">
      {/* <h1 className={isRed ? "red" : ""}>Chnage my color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;

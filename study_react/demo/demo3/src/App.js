import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 11,
      text: "gordon",
      day: "Oct 17 8:25pm",
      reminder: true,
    },
    {
      id: 22,
      text: "aman",
      day: "Feb 17 8:25pm",
      reminder: true,
    },
    {
      id: 33,
      text: "Root",
      day: "Nov 17 8:25pm",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    console.log("delete", id);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title="John Snow" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;

import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

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

  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    console.log("delete", id);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    console.log(id);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="John Snow"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
      {/* // <Tasks tasks={tasks} onDelete={deleteTask} /> */}
    </div>
  );
}

export default App;

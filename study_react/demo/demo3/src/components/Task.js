import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task" onClick={() => onDelete(task.id)}>
      <h3>
        {task.text}
        <FaTimes />{" "}
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;

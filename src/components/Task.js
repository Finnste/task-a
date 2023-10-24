import React, { useState } from "react";
import "../styles/Task.css";

function Task({ tasks, completeTask, deleteTask }) {
  const [status, setStatus] = useState("task completed");

  return tasks.map((task, index) => (
    <li key={index} className={task.isComplete ? "task complete" : "task"}>
      <div>{task.name}</div>
      <input className="checkbox" type="checkbox" onClick={() => completeTask(task.id)}/>
      <button className="deleteButton" key={task.id} onClick={() => deleteTask(task.id)}>
        delete
      </button>
    </li>
  ));
}

export default Task;

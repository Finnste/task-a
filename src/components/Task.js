import React, { useState } from "react";
import "../styles/Task.css";

//renders the created tasks
function Task({ tasks, completeTask, deleteTask }) {
  const [status, setStatus] = useState("task completed");
  const [editable, setEditable] = useState(false);

  //resets the edibility of the task title
  const endEdit = (e) => {
    console.log(e.which)
    if (e.which == 10 || e.which == 13) {
      setEditable(false);
    }
  }

  return tasks.map((task, index) => (
    <li key={index} className={task.isComplete ? "task complete" : "task"}>
      <input
        className={editable ? "taskTitle taskEdit": "taskTitle"}
        defaultValue={task.name}
        disabled={!editable}
        onKeyDown={endEdit}
      ></input>
      <input
        className="checkbox"
        type="checkbox"
        onClick={() => completeTask(task.id)}
      />
      <button
        className="dButton"
        key={task.id}
        onClick={() => deleteTask(task.id)}
      >
        delete
      </button>

      <button
        className="dButton"
        onClick={() => setEditable(!editable)}
      >
        edit
      </button>
    </li>
  ));
}

export default Task;

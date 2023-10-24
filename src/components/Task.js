import React, { useState } from "react";
import "./Task.css"

function Task({ tasks, completeTask, deleteTask }) {

  return tasks.map((task, index) => (
    <div
      key={index}
      className={task.isComplete ? "task-row complete" : "task-row"}
    >
      <p>{task.name}</p>
      <button onClick={() => completeTask(task.id)}>
        complete
      </button>
      <button key={task.id} onClick={() => deleteTask(task.id)}>
        delete
      </button>
    </div>
  ));
}

export default Task;

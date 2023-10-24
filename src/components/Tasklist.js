import React, { useState } from "react";
import Task from "./Task";
import Form from "./Form";
import "../styles/Tasklist.css"

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(0);

  // create a new task
  const createTask = (task) => {
    if (task.name != "") {
      const newTasks = [task, ...tasks];
      setTasks(newTasks);
      setOpen((open) => open + 1);
    }
  };

  const completeTask = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        if (!task.isComplete) {
          setOpen((open) => open - 1);
        } else {
            setOpen((open) => open + 1);

        }
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const deleteArr = [...tasks].filter((task) => task.id !== id);
    setTasks(deleteArr);
    setOpen((open) => open - 1);
  };

  const editTask = (id) => {};

  return (
    <div className="taskList">
      <h1>Task List</h1>
      <Form onSubmit={createTask} />
      <Task
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
      <div className="counter">{open} unfinished tasks</div>
    </div>
  );
};

export default TaskList;

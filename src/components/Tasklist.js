import React, { useState } from "react";
import Task from "./Task";
import Form from "./Form";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // create a new task
  const createTask = (task) => {
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
    console.log(task, ...tasks);
  };

  const completeTask = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const deleteArr = [...tasks].filter((task) => task.id !== id);
    setTasks(deleteArr);
  };

  const editTask = (id) => {};

  return (
    <div className="tasklist">
      <h1>Task List</h1>
      <Form onSubmit={createTask} />
      <Task
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};

export default TaskList;

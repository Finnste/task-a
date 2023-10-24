import React, { useState } from "react";
import Task from "./Task";
import Form from "./Form";
import "../styles/Tasklist.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counter";

const TaskList = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(0);

  // creates a new task
  const createTask = (task) => {
    if (task.name != "") {
      const newTasks = [task, ...tasks];
      setTasks(newTasks);
      // increment the open tasks counter using redux
      dispatch(increment());
    }
  };

  // marks task as complete
  const completeTask = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        if (!task.isComplete) {
          // decrement the open tasks counter using redux
          dispatch(decrement());
        } else {
          // increment the open tasks counter using redux
          dispatch(increment());
        }
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // deletes task from list
  const deleteTask = (id) => {
    const deleteArr = [...tasks].filter((task) => task.id !== id);
    setTasks(deleteArr);
    // decrement the open tasks counter using redux
    dispatch(decrement());
  };

  return (
    <div className="taskList">
      <h1>Task List</h1>
      <Form onSubmit={createTask} />
      <ul>
        <Task
          tasks={tasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      </ul>
      <div className="counter">{count} unfinished tasks</div>
    </div>
  );
};

export default TaskList;

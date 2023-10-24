import React, { useState } from "react";

const Form = (props) => {
  const [input, setInput] = useState("");

  // update input while typing
  const inputChange = (e) => {
    setInput(e.target.value);
  };

  // handle submit of the new task
  const inputSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: input
    });
    setInput("");
  };

  return (
    <form className="form" onSubmit={inputSubmit}>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={input}
        className="taskInput"
        onChange={inputChange}
      />
      <button className="taskButton">Add Task</button>
    </form>
  );
};

export default Form;

import React from "react";

function Task({ task, category, onDeleteTask }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button
      onClick={onDeleteTask}
       className="delete">
        X
        </button>
    </div>
  );
}

export default Task;

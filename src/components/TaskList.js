import React from "react";
import Task from "./Task"
function TaskList({ TASKS, filterdCategory, onDeleteTask  }) {
  const filterdTasks = TASKS.filter(task => {
    if (filterdCategory === "All") return true
    return task.category === filterdCategory
  }
  )
  const tasks = filterdTasks.map((task, index) => <Task 
  key={index} 
  task={task.text} 
  category={task.category} 
    onDeleteTask={onDeleteTask}
  />)
  return (
    <div className="tasks">
      {tasks}
    </div>
  );
}

export default TaskList;

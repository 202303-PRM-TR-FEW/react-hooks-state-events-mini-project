import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
function App() {
  const [fiterdCategory, setFilterdCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }
  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }
console.log(tasks)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        CATEGORIES={CATEGORIES}
        fiterdCategory={fiterdCategory}
        setFilterdCategory={setFilterdCategory}
      />
      <NewTaskForm CATEGORIES={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList TASKS={TASKS} 
      filterdCategory={fiterdCategory}
        onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

function NewTaskForm({ CATEGORIES, onTaskFormSubmit }) {
  const [newTasx, setNewTask] = useState({
    text: 'task',
    category: 'category'
  })
  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value

    setNewTask({
      ...newTasx,
      [name]: value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(newTasx)
    
  }
  const options = CATEGORIES.map((category, index) => {
    if (category !== "All") {
      return <option key={index}>{category}</option>
    }
  })
  return (
    <form className="new-task-form" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => handleChange(e)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => handleChange(e)}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

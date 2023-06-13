import React from "react";

function CategoryFilter({ CATEGORIES, setFilterdCategory }) {
  function handleClick(target) {
    setFilterdCategory(target)
  }

  const Buttons = CATEGORIES.map((text, index) =>
    <button
      onClick={() => handleClick(text)}
      key={index}>
      {text}
    </button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {Buttons}
    </div>
  );
}

export default CategoryFilter;

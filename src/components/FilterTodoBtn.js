import React from "react";

function FilterTodoBtn(){
    return(
      <div className="other-buttons-container">
      <div>
        <button className="button filter-button filter-button-active">
          All
        </button>
        <button className="button filter-button">Active</button>
        <button className="button filter-button">Completed</button>
      </div>
      <div>
        <button className="button">Clear completed</button>
      </div>
    </div>
    )
}

export default FilterTodoBtn;
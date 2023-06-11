import React from "react";

function CheckAllTodo({remainingCount}){
    return(
      <div className="check-all-container">
        <div>
          <div className="button">Check All</div>
        </div>
        <span>{remainingCount} item{`${remainingCount > 1 ? 's':''}`} remaining</span>
      </div>
    )
}

export default CheckAllTodo;
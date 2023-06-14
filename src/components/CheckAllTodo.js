import React from "react";

function CheckAllTodo({remainingCount,Checkall}){
    return(
      <div className="check-all-container">
        <div>
          <div className="button" onClick={Checkall}>Check All</div>
        </div>
        <span>{remainingCount} item{`${remainingCount > 1 ? 's':''}`} remaining</span>
      </div>
    )
}

export default CheckAllTodo;
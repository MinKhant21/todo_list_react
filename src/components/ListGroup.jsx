import { useState } from "react";

function ListGroup() {
    const lists = ["html","css","javascript"];
    // const selectlist = -1;
    const [Selectlist , SetSelectLi] = useState(-1);
    return (
        <>
            <h1>List Group</h1>
            <ul className="list-group">
            {
                lists.length === 3 ? 
                lists.map((list ,index ) =>{
                   return <li className={Selectlist == index ? "list-group-item active" : "list-group-item " }
                    key={list} 
                    onClick={()=>{
                    SetSelectLi(index)
                    }}>
                        {list}
                    </li>
                })
                :""
               }
            </ul>
              
        </>
    )
}

export default ListGroup
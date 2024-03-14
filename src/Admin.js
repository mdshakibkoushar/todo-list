import React from "react";
function Admin(props){
    return(
        <div>
            <h1> Hello Shakib Koushar</h1>
            <button onClick={()=>props.data()}>click me </button>
        </div>
    )

}
export default Admin;
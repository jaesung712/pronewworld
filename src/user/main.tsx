import React from "react";
import Sidebar from "./component/header/sidebar";
import Miniheader from "./component/header/miniheader";
const main = (): JSX.Element =>{
    return(
        <div className="container">
            <Sidebar></Sidebar>
            <Miniheader></Miniheader>
        </div>
    )
}

export default  main;


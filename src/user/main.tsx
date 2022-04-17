import React from "react";
import Sidebar from "./component/header/sidebar";

const main = (): JSX.Element =>{
    return(
        <div className="container">
            <Sidebar></Sidebar>
            <div className="box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio excepturi quas. Quam ipsum dolores culpa amet ex quaerat, maiores, in mollitia dolor ab corrupti minus veritatis, voluptas illo. Quam.</div>
        </div>
    )
}

export default  main;


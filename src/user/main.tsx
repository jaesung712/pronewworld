import React from "react";
import styled from "styled-components";
import Sidebar from "./component/header/sidebar";
import Miniheader from "./component/header/miniheader";
import Forpage from "./component/formain.tsx/forpage";

const Mainst = styled.div`
    .container{
        display: flex;
    }
    .rigth{
        padding-left: 20rem;
    }
`
const main = (): JSX.Element =>{
    return(
        <Mainst>
            <div className="container">
                <div className="left">
                <Sidebar></Sidebar>
                </div>
                <div className="rigth">
                    <Miniheader></Miniheader>
                    <Forpage></Forpage>
                </div>
                
            </div>
        </Mainst>
    )
}

export default  main;


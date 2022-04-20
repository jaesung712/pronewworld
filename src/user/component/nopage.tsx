import React, { useState, Component } from "react";
import styled from "styled-components";
const Nopagest = styled.div`
    
    .container{
        width:100%;
        background-color: white;
        margin-top:1.8em;
        border: 1px black;
        height:auto;
        .contentbox{
            margin: 40px;
        }
    }
`
const nopage = (): JSX.Element => {
    return(
        <Nopagest>
            <div className="container">
                <div className="contentbox">

                </div>
            </div>
        </Nopagest>
    )
}
export default nopage;
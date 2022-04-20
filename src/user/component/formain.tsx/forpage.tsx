import React, { useState, Component } from "react";
import styled from "styled-components";
const Forpagest = styled.div`
    p{
        margin:0;
    }
    .container{
        width:100%;
        background-color: white;
        margin-top:1.8em;
        border: 1px black;
        height:100vh;
        .contentbox{
            margin: 40px;
        }
    }
`
const forpage = (): JSX.Element => {
    return(
        <Forpagest>
            <div className="container">
                <div className="contentbox">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium temporibus atque perferendis quia nihil libero quae quos, dolore cumque ipsam expedita incidunt sapiente fuga consequuntur numquam! Atque deleniti earum qui!</p>
                </div>
            </div>
        </Forpagest>
    )
}

export default forpage;
import React, { useState, Component } from "react";
import styled from "styled-components";
import Nopage from "../nopage";
const Forpagest = styled.div`
    
    .container{
        width:100vh;
        background-color: white;
        margin-top:1.8em;
        border: 1px black;
        height:auto;
        .contentbox{
            margin: 40px;
        }
    }
`
const Forpage = (): JSX.Element => {
    const [checkpage, setcheckpage] = useState(false);

    
    var child = document.querySelector('.contentbox')
    console.log(child?.childNodes);
    if(child?.childNodes == undefined){
        console.log("자식객체가 없습니다")
    }else{

    }
    return(
        <Forpagest>
            <div className="container">
                <div className="contentbox">
                    <Nopage></Nopage>
                </div>
            </div>
        </Forpagest>
    )
}

export default Forpage;
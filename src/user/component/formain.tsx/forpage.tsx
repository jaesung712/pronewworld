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
        console.log("없습니다")
    }
    return(
        <Forpagest>
            <div className="container">
                <div className="contentbox">
                    
                </div>
            </div>
        </Forpagest>
    )
}

export default Forpage;
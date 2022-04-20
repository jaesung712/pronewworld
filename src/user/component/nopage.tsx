import React, { useState, Component } from "react";
import styled from "styled-components";
const Nopagest = styled.div`
    h3{
        color:white;
        
    }
    h4{
        color:white;
    
    }
    .container2{
        width:83rem;
        background-color: #afafb2;
        margin-top:1.8em;
        border: 5px black;
        height:30rem;
        text-align: center;
        .contentbox2{
            padding-top: 40px;
            
        }
        
    }
    .btn{
    margin-top:30px;
    border-radius: 5px;
    border:0; 
    background: #7d7d7f;
    width: 300px;
    height: 40px; 
    
    font-size: 2rem; 
    color: white; 
    margin-bottom: 5px;
    font-weight: 600;
    }
    .btn:hover{
        background: #4b4b4c;
    }
`
const nopage = (): JSX.Element => {
    return(
        <Nopagest>
            <div className="container2">
                <div className="contentbox2">
                <h3>저장된 페이지가 없습니다!</h3>
                <img className="pageicon" src="./icon/no.png"></img>
                </div>
                <button className="btn">New Page</button>
            </div>
        </Nopagest>
    )
}
export default nopage;
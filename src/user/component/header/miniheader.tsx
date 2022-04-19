import React, { useState, Component } from "react";
import styled from "styled-components";

const Miniheaderst = styled.div`
header {
    background: rgba(0,0,0,0.2);
    color: white;
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    height:1.7em;
    }

    ul {
    list-style:none;
    padding:0.5em 0;
		argin:0;
    }
    li {
    display: inline-block;
    margin-left: 16px;
    font-size:0.95em;
    font-weight: bold;
	transition:all 0.15s linear;
    color: #9b9ba8;
    cursor:pointer;
    
    &:hover{
        background-color:rgba(0,0,0,0.1);
    }
    
    &:focus{
        outline:none;
    }
    }

    

`
const miniheader = (): JSX.Element => {
    return(
        <Miniheaderst>
            <header>
                <h1></h1>
                <nav>
                    <ul>
                    <li>공유</li>
                    
                    <img src="./icon/more.png"></img>
                    <li>댓글</li>
                    <li>업데이트</li>
                    <li>더보기</li>
                    </ul>
                </nav>
            </header>
        </Miniheaderst>
    )
}

export default miniheader;
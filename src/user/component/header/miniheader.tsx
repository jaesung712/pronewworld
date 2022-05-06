import React, { useState, Component ,useEffect ,forwardRef ,useImperativeHandle} from "react";
import styled from "styled-components";
import Headerpop from "../popup/headerpop";

const Miniheaderst = styled.div`
header {
    width:100%;
    background: rgba(0,0,0,0.2);
    color: white;
    padding-left: 32px;
    padding-right: 32px;
   
    align-items: center;
    position: fixed;
    top: 0;
    height:1.8em;
    }
    ul {
    position: absolute;
    right: 430px;
    list-style:none;
    top:5px;
	margin:0;

        .icon{
            width:12px;
            heigth:12px;
            cursor:pointer;
            &:hover{
                background-color:rgba(0,0,0,0.1);
            }
            
            &:focus{
                outline:none;
            }
        }
    }
    li {
    display: inline-block;
    margin-left: 18px;
    font-size:0.95em;
    font-weight: bold;
	transition:all 0.15s linear;
    color: #9b9ba8;
    cursor:pointer;
    }

    .morepop{
        transition:all 0.15s linear;

    }

`

const Miniheader = ({showmore}): JSX.Element => {
    
    return(
        <Miniheaderst>
            <header>
                
                <nav>
                    <ul>
                    <li>
                    <img className="icon" src="./icon/repost.png"></img>
                    </li>
                    <li>
                    <img className="icon" src="./icon/right.png"></img>
                    </li>
                    <li>
                    <img className="icon" src="./icon/update.png"></img>
                    </li>
                    <li>
                    <img className="icon" src="./icon/more.png" onClick={showmore}></img>
                    </li>
                    </ul>
                </nav>
            </header>
            {/* <div className="morepop" style={{display: moredis}}>
            <Headerpop></Headerpop>
            </div> */}
            
        </Miniheaderst>
    )
}

export default Miniheader;
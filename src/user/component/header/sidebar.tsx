import React, { useState, Component } from "react";
import styled from "styled-components";

const Mainheaderst = styled.div`

main{
	position:relative;
	height:100vh;
	
	.helper{
		background:rgba(0,0,0,0.2);
		color:#e1e1e5;
		position:absolute;
		top:50%;
		left:50%;
		transform:translate3d(-50%,-50%,0);
		padding:1.2em 2em;
		text-align:center;
		border-radius:20px;
		font-size:2em;
		font-weight:bold;
		
		span{
			color:rgba(0,0,0,0.1);
			font-size:0.4em;
			display:block;
		}
	}
}

.menu{
	background: #e1e1e5;
	height:100vh;
	width:20rem;
	position:fixed;
	top:0;
	left:0;
	z-index:5;
	outline:none;
	
	.avatar{
		background:rgba(0,0,0,0.1);
		padding:2em 0.5em;
		text-align:center;
		
		h2{
			font-weight:normal;
			margin-bottom:0;
		}
	}
	
	ul{
		list-style:none;
		padding:0.5em 0;
		margin:0;
		
		li{
			padding:0.5em 1em 0.5em 3em;
			font-size:0.95em;
			font-weight:regular;
			transition:all 0.15s linear;
			cursor:pointer;
            color: #9b9ba8;
			&:hover{
				background-color:rgba(0,0,0,0.1);
			}
			
			&:focus{
				outline:none;
			}
			
		}

        
	}
    .hide{
        display: none;
    }
}


`;

const mainheader = (): JSX.Element =>{

    // const [favhide, setfavhide] = useState([]);

    return (
        
        <Mainheaderst>
            <nav className="menu" >
                <header className="avatar">
                    <h2>Jaesung</h2>
                </header>
                <ul>
                    <li  className="fasttool"><span>+</span></li>
                    <li  className="favpage"><span>즐겨찾기</span></li>

                    <li  className="hide"><span>이재성일기</span></li>

                    <li  className="page"><span>개인페이지</span></li>

                    <li  className="hide"><span>이재성일기</span></li>
                    
                    <li  className="trash"><span>휴지통</span></li>
                </ul>
            </nav>
            
        </Mainheaderst>
    )
}

export default mainheader;
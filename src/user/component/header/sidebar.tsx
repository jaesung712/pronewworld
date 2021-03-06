import { click } from "@testing-library/user-event/dist/click";
import React, { useState, Component , forwardRef, useImperativeHandle} from "react";
import styled from "styled-components";
import Spt1 from "../popup/sidepopt1";
import { MouseEvent } from "react"
import { useEffect } from "react";



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
		.proimg img{
			width: 150px;
			height: 150px;
			object-fit: cover;
			border-radius:50px;
		}

		h2{
			font-weight:normal;
			margin-bottom:0;
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
				color: black;
				&:hover{
					background-color:rgba(0,0,0,0.1);
				}
				
				&:focus{
					outline:none;
				}
				
			}
		}
	}
	
	ul{
		list-style:none;
		padding:0.5em 0;
		margin:0;
		
		.icon{
            width:14px;
            heigth:14px;
            cursor:pointer;
            &:hover{
                background-color:rgba(0,0,0,0.1);
            }
            
            &:focus{
                outline:none;
            }
        }
		.pageicon{
			padding:0 5px ;
            width:14px;
            heigth:14px;
            
        }
		li{
			padding:0.5em 1em 0.5em 3em;
			font-size:0.95em;
			font-weight:regular;
			transition:all 0.15s linear;
			cursor:pointer;
            color: black;
			&:hover{
				background-color:rgba(0,0,0,0.1);
			}
			
			&:focus{
				outline:none;
			}
			
		}

        
	}
    
}


`;

const Mainheader = ({onpopup}): JSX.Element =>{
	
    const [favhide, setfavhide] = useState("none");
	const [prihide, setprihide] = useState("none");

	const changeFav = (favhide: React.SetStateAction<string>) => {
        setfavhide(favhide)
    }
	const changePri = (favhide: React.SetStateAction<string>) => {
        setprihide(favhide)
    }

	const showfav = () =>{
		if(favhide !== "none"){
			changeFav("none")
		}else{
			changeFav("block")
		}
		
	}
	const showpri = () =>{
		if(prihide !== "none"){
			changePri("none")
		}else{
			changePri("block")
		}
		
	}
	const logout = () =>{
		window.location.href="/"
	}
	
	
	
    return (
        
        <Mainheaderst>
            <nav className="menu" >
                <header className="avatar">
                    <h2>Jaesung</h2>
					<div className="proimg">
					<img src="./img/?????????????????????.jpg"></img>
					</div>
                </header>
                <ul>
                    <li  className="fasttool" onClick={onpopup}>
					
					<img className="icon" src="./icon/fix.png"></img>
						<span>??????</span></li>
						
                    <li  className="favpage" onClick={showfav}><span>  ????????????</span></li>

                    <li  className="hide" style={{ display: favhide }}>
						<img className="icon" src="./icon/down.png"></img>
						<img className="pageicon" src="./icon/page.png"></img><span>????????????</span></li>

                    <li  className="page"  onClick={showpri}> <span>???????????????</span></li>

                    <li  className="hide"style={{ display: prihide }} >
						<img className="icon" src="./icon/down.png"></img>
						<img className="pageicon" src="./icon/page.png"></img>
						<span>????????????</span></li>
                    
                    <li  className="trash"><span>??????????????????</span></li>
					<li  className="trash"><span>?????????</span></li>
                </ul>
				
            </nav>
            
        </Mainheaderst>
    )
}

export default Mainheader;
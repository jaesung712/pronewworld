import { click } from "@testing-library/user-event/dist/click";
import React, { useState, Component } from "react";
import styled from "styled-components";
import Popcontent from "../popup/popcontent";
import { MouseEvent } from "react"



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
const Editst = styled.div`
	.pop_container{
		z-index: 7; 
		position:fixed; 
		left:0; top:0; width:100%; 
		height:100%; background:rgba(0,0,0,0.3);}
    .xbtn img{
		position: absolute;
		z-index: 9; 
		top:3px;
		left:942px;
		cursor:pointer;
	}
	.popbox{
    position: absolute;
    top: 58px;
	left: 341px;
    
    background:white;
	border:none; width: 60rem; height: 40rem; border-radius: 15px; padding: 1rem;

	.popsidebar{
		background: #e1e1e5;
		height:42.1rem;
		width:16rem;
		position:fixed;
		top:58px;
		left:341px;
		z-index:8;
		outline:none;
		
		.title{
			padding-left:30px
		}
		ul{
			padding-top:4px;
		}
	}
    }
`
const Mainheader = (props): JSX.Element =>{
	
    const [favhide, setfavhide] = useState("none");
	const [prihide, setprihide] = useState("none");

	type CustomMouseEvent = MouseEvent<HTMLElement>
	
	
	
	const clickside = (event: CustomMouseEvent) => {
        // code ....
    }



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
	
	const Sidepop = () =>{
		return(
			<Editst>
            <div className="pop_container" >
                <div className="popbox">
					<div className="xbtn">
					<img onClick={onpopup} src="./icon/x.png"></img>
					</div>
					<div className="popsidebar">
						<div className="title">
							<h4>jaesung</h4>
						</div>
						<ul className="forProfile">
							<li value={"t1"} onClick={(e)=> {clickside(e)}}>내계정</li>
							<li>알림과 설정</li>
							
						</ul>
						<div className="title">
							<h4>워크스페이스</h4>
						</div>
						<ul className="forworkspace">
							<li>설정</li>
							<li>멤버</li>
							
						</ul>
					</div>
				<div className="popcontent">
					<Popcontent></Popcontent>
				</div>
                </div>

            </div>
        </Editst>
		)
	}
	const[popupon, setpopupon] = React.useState(false);
    const onpopup = () => {
        setpopupon(!popupon);
         //팝업 창 띄울 시 body 스크롤
		console.log("온팝업온")
        if(popupon==false){
            document.body.style.overflow = "hidden";
        }else if(popupon==true){
            document.body.style.overflowY = "unset";
        }
    }
	
    return (
        
        <Mainheaderst>
            <nav className="menu" >
                <header className="avatar">
                    <h2>Jaesung</h2>
					<div className="proimg">
					<img src="./img/이재성증명사진.jpg"></img>
					</div>
                </header>
                <ul>
                    <li  className="fasttool" onClick={onpopup}>
					
					<img className="icon" src="./icon/fix.png"></img>
						<span>설정</span></li>
						{popupon?<Sidepop/>:''}
                    <li  className="favpage" onClick={showfav}><span>  즐겨찾기</span></li>

                    <li  className="hide" style={{ display: favhide }}>
						<img className="icon" src="./icon/down.png"></img>
						<img className="pageicon" src="./icon/page.png"></img><span>롤할사람</span></li>

                    <li  className="page"  onClick={showpri}> <span>개인페이지</span></li>

                    <li  className="hide"style={{ display: prihide }} >
						<img className="icon" src="./icon/down.png"></img>
						<img className="pageicon" src="./icon/page.png"></img>
						<span>롤할사람</span></li>
                    
                    <li  className="trash"><span>콜라보레이션</span></li>
					<li  className="trash"><span>휴지통</span></li>
                </ul>
				
            </nav>
            
        </Mainheaderst>
    )
}

export default Mainheader;
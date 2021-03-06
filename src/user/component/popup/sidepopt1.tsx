import React, { useState, Component, useEffect } from "react";
import styled from "styled-components";
import { MouseEvent } from "react"

const Spt1st =styled.div`
.pop_container{
    z-index: 7; 
    position:fixed; 
    left:0; top:0; width:100%; 
    height:100%; background:rgba(0,0,0,0.3);}
.xbtn img{
    position: absolute;
    z-index: 12; 
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
}
`
const Popcontentst = styled.div`

    .container{
        border: 2px blue;
        z-index:10;
        width:800px;
        height:600px;
        position: absolute;
        left: 300px;

        .contentbox{
            width:680px;
            dispaly:flex;
            ::-webkit-scrollbar {
                display: none;
            }
            .underline{
                border-bottom:1px;
            }
            .profileImg{
                display:flex;
                flex-direction: column;
                
            }
            .profileImg img{
            width: 100px;
			height: 100px;
			object-fit: cover;
			border-radius:20px;
            margin-bottom:3px;
            }
            .profileImg button{
            width: 100px;
			height: 30px;
			border:none;
            background:none;
            transition:all 0.15s linear;
			cursor:pointer;
            &:hover{
                background-color:rgba(0,0,0,0.1);
            }
            }
        }
        
    }
`
const Popcontentst2 = styled.div`

    .container{
        border: 2px blue;
        z-index:10;
        width:800px;
        height:600px;
        position: absolute;
        left: 300px;
        .contentbox{
            width:680px;
            dispaly:flex;
            
            ::-webkit-scrollbar {
                display: none;
            }

        }
        
    }
`
const Popcontentst3 = styled.div`
.container{
    border: 2px blue;
    z-index:10;
    width:800px;
    height:600px;
    position: absolute;
    left: 300px;

    .contentbox{
        width:680px;
        dispaly:flex;
        ::-webkit-scrollbar {
            display: none;
        }
    }
}
`
const Popcontentst4 = styled.div`
.container{
    border: 2px blue;
    z-index:10;
    width:800px;
    height:600px;
    position: absolute;
    left: 300px;

    .contentbox{
        width:680px;
        dispaly:flex;
        ::-webkit-scrollbar {
            display: none;
        }

        header {
            width:200px;
            background: white;
            color: white;
            align-items: center;
            top: 150px;
            height:2.0em;
            }
            ul {
                display:flex;
                width:300px;
                position: absolute;
                right: 499px;
                list-style:none;
                top:59px;
                margin:0;
                text-align:center;
            }
            .iconbox{
                    cursor:pointer;
                    transition:all 0.15s linear;
                    margin-right:10px;
                   
                    li{
                        display: inline-block;
                        font-size:0.95em;
                        font-weight: bold;
                        color: #9b9ba8 ;
                        padding: 0.5em 1em 0.5em 1em;
                        cursor:pointer;
                    }
                    .icon{
                        width:16px;
                        heigth:16px;
                    }
            }    


        }
    }

    #memlist{
        display:flex;
        justify-content: space-around;
        width:84%;
        background: white;
        position: absolute;
                right: 134px;
                top: 136px;
                border-bottom:1px solid orange;
                
        li{
            padding: 0.5em 1em 0.5em 1em;
        }
    }
}
`
const Spt1 = ({onpopup}): JSX.Element =>{

	const [showcontent , setshowcontent] = React.useState("t1")
	useEffect(()=>{
		// const clickT1 : HTMLElement = document.getElementsByClassName("target")[0] as HTMLElement
		// console.log(clickT1.getAttribute('className'))
	})

    const [t1,sett1] = useState("none");
    const [t2,sett2] = useState("none");
    const [t3,sett3] = useState("none");
    const [t4,sett4] = useState("none");

    const [scroll1,setscroll1] = useState("hidden");
    const [scroll2,setscroll2] = useState("hidden");
    const [scroll3,setscroll3] = useState("hidden");
    const [scroll4,setscroll4] = useState("hidden");
    
    interface Spage  { 
        type: string;
    };
    const [b1,setb1] = useState("none");
    const [b2,setb2] = useState("none");
    const [showb,setshowb] = useState({type :"b1"})
    //????????? ?????? ??? ????????? ????????? ??????
    const [showpage, setshowpage] = useState({type: "type1"});
    const clickt1 = ()=>{
        setshowpage({type: "type1"})
        setshowcontent("t1")
    }
    const clickt2 = ()=>{
        setshowpage({type: "type2"})
        setshowcontent("t2")

    }
    const clickt3 = ()=>{
        setshowpage({type: "type3"})
        setshowcontent("t3")

    }
    const clickt4 = ()=>{
        setshowpage({type: "type4"})
        setshowcontent("t4")

    }

    useEffect(() =>{
        
        // ??????????????? ??????..
        if(showpage.type === "type1" ){
            sett1("block");
            sett2("none");
            sett3("none");
            sett4("none");
            setscroll1("auto");
            setscroll2("hidden");
            setscroll3("hidden");
            setscroll4("hidden");
        }else if(showpage.type === "type2" ){
            sett1("none");
            sett2("block");
            sett3("none");
            sett4("none");
            setscroll1("hidden");
            setscroll2("auto");
            setscroll3("hidden");
            setscroll4("hidden");
        }else if(showpage.type === "type3" ){
            sett1("none");
            sett2("none");
            sett3("block");
            sett4("none");
            setscroll1("hidden");
            setscroll2("hidden");
            setscroll3("auto");
            setscroll4("hidden");
        }else if(showpage.type === "type4" ){
            sett1("none");
            sett2("none");
            sett3("none");
            sett4("block");
            setscroll1("hidden");
            setscroll2("hidden");
            setscroll3("hidden");
            setscroll4("auto");
        }

        if(showb.type === "b1"){
            setb1("block")
            setb2("none")
        }else{
            setb2("block")
            setb1("none")
        }
    })
    const showb1 = ()=>{
        setshowb({type:"b1"});
    }
    const showb2 = ()=>{
        setshowb({type:"b2"});
    }

    return(
        <Spt1st>
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
							<li  value={"t1"} className="target" onClick={clickt1}>?????????</li>
                            
							<li className="target" onClick={clickt2} >????????? ??????</li>
							
						</ul>
						<div className="title">
							<h4>??????????????????</h4>
						</div>
						<ul className="forworkspace">
							<li className="target" onClick={clickt3}>??????</li>
							<li className="target" onClick={clickt4}>??????</li>
							
						</ul>
					</div>
				<div className="popcontent">
                <Popcontentst>
                    <div className="container">
                        <div className="contentbox" style={{ overflow:scroll1  }}>
                            <div className="type1" style={{ display: t1 }} >
                                <div className="title">
                                    <h3>??????</h3>
                                </div>
                                <div className="info">
                                    <p className="underline">?????? ?????? ?????? ????????? ?????? ????????????????????? ???????????????.</p>
                                </div>
                                <div className="profileImg">
                                    <img src="./img/?????????????????????.jpg"></img>
                                    <button>?????? ?????????</button>
                                </div>
                                <hr></hr>
                                <div className="profile">
                                    <h3>?????? ??????</h3>
                                    <p>?????????</p>
                                    <div className="emailbox">
                                        <h3>jaesung190@gmail.com</h3>
                                        <p>????????? ??????</p>
                                    </div>
                                    <hr></hr>
                                    <p>???????????? ??????</p>
                                    <input type="text"></input>
                                    <h3>????????????</h3>
                                    <p className="underline">?????? ????????? ????????? ???????????? ?????? ????????? ?????? ??????????????? ????????? ??? ????????????.</p>
                                    <h3>?????? ???????????? ????????????</h3>
                                    <p>?????? ????????? ????????? ?????? ?????? ???????????? ?????????????????? ?????? ????????????????????????.</p>
                                    <button>????????????</button>
                                    <hr></hr>
                                    <h3>????????????</h3>
                                    <button>??? ?????? ??????</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </Popcontentst>
            
                    {/* ????????? ?????? */}
                    <Popcontentst2>
                    <div className="container">
                        <div className="contentbox" style={{ overflow:scroll2  }}>
                            <div className="type2" style={{ display: t2 }}>
                            <div className="title">
                                <h3>??? ??????</h3>
                                </div>
                                <div className="info">
                                    <p className="underline">???????????? ????????? ??????????????? ??????????????????.</p>
                                </div>
                                <hr></hr>
                                <div>
                                <h4>???????????? ?????? ??????</h4>
                                <p>???????????? ?????? ?????? ????????? ?????? ????????? ?????? ????????????.</p>
                                </div>
                                <div>
                                <h4>????????? ??????</h4>
                                <p>???????????? ?????? ???????????? ??????, ?????? ??? ?????? ????????? ?????? ??????????????? ???????????? ????????????.</p>
                                </div>
                                <hr></hr>
                                <h3>??? ??????</h3>
                                <div>
                                    <h4>?????? ?????????</h4>
                                    <p>Lotion??? ??????????????? ????????????????????? ????????? ??? ????????? ???????????? ???????????????</p>
                                    <select className="startpage">
                                        <option value="1">????????? ?????????</option>
                                        <option value="2">????????? ?????????</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                    </Popcontentst2>
                    {/* ?????????????????? ?????? */}
                    <Popcontentst3>
                    <div className="container">
                        <div className="contentbox" style={{ overflow:scroll3  }}>
                            <div className="type3" style={{ display: t3 }}>
                            <div className="title">
                                <h3>?????? ???????????? ??????</h3>
                            </div>
                            <hr></hr>
                            <div className="name">
                                <h3>??????</h3>
                                <input></input>
                                <p>????????? ???????????? ?????? ????????? ????????? ??? ????????????. ????????? ????????? ???????????????.</p>
                            </div>
                            
                                
                            </div>
                        </div>
                    </div>
                    </Popcontentst3>
                    {/* ?????????????????? ?????? */}
                    <Popcontentst4>
                    <div className="container">
                        <div className="contentbox" style={{ overflow:scroll4  }}>
                            <div className="type4" style={{ display: t4 }}>
                            <div className="title">
                                <h3>?????? ??????</h3>
                            </div>
                            <hr></hr>
                            <header className="member">
                                <nav>
                                    <ul>
                                        <div className="iconbox" onClick={showb1}>
                                            <img className="icon" src="./icon/member.png"></img>
                                        <li>??????</li>
                                        </div>
                                        <div className="iconbox" onClick={showb2}>
                                            <img className="icon" src="./icon/group.png"></img>
                                        <li>??????</li>
                                        </div>
                                    </ul>
                                </nav>
                            </header>
                            <div className="box memberbox" style={{ display: b1 }} >
                                <div className="memberbtn">
                                    <button>?????? ??????</button>
                                </div>
                                
                                <div className="membercontent">
                                    <div className="memberlist">
                                        <div className="memberinfo">
                                                <ul id="memlist">
                                                    <li>??????</li>
                                                    <li>??????</li>
                                                    <li>?????? ??????</li>
                                                </ul>
                                            
                                                    {/* ????????? ?????? */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box groupbox" style={{ display: b2 }} >
                                <div>
                                    <h3>??????</h3>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </Popcontentst4>
				</div>
                </div>

            </div>
        </Spt1st>
    )
}
export default Spt1;
import React, { SetStateAction, useEffect, useState ,useRef, FunctionComponent } from "react";
import styled from "styled-components";
import Sidebar from "./component/header/sidebar";
import Miniheader from "./component/header/miniheader";
import Forpage from "./component/formain.tsx/forpage";
import Spt1 from "./component/popup/sidepopt1";
import Headerpop from "./component/popup/headerpop";

const Mainst = styled.div`
    .container{
        display: flex;
    }
    .rigth{
        padding-left: 20rem;
    }
`
const Main = (): JSX.Element =>{
    const[popupon, setpopupon] = React.useState(false);
    const [moredis,setmoredis] = useState(false)

    const onpopup = () => {
        setpopupon(!popupon);
        if(popupon===true){
            document.body.style.overflow = "hidden";
            
        }else if(popupon===false){
            document.body.style.overflowY = "unset";
            //만약 헤더더보기가 켜져있다면?
            if(moredis ===true){
                setmoredis(!moredis)
            }
			
        }
    }
    //사이드바 설정버튼 제어
	const Sidepop = () =>{
		return(
			<Spt1 onpopup={onpopup}></Spt1>
		)
	}
    //헤더 더보기 버튼 제어
    const showmore = ()=>{
        setmoredis(!moredis);
}
    return(
        <Mainst>
            <div className="container">
                <div className="left">
                <Sidebar onpopup={onpopup}></Sidebar>
                {popupon?<Sidepop/>:''}
                </div>
                <div className="rigth">
                    <Miniheader showmore={showmore}></Miniheader>
                    {moredis?<Headerpop/>:''}
                    <Forpage></Forpage>
                </div>
                
            </div>
        </Mainst>
    )
}

export default  Main;






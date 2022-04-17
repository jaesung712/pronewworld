import React from "react";
import styled from "styled-components";

const NextBtnst = styled.div`

.nextBtn {
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
.nextBtn:disabled{ background: #dfdfdf; }
.nextBtn:hover{
    background: #4b4b4c;
}
`
const nextBtn = (): JSX.Element =>{

    const goMain = () =>{
        window.location.href="/main"
    }
    return(
        <NextBtnst>
        <div>
            <button className="nextBtn" type="button" onClick={goMain}>NEXT</button>
        </div>
        </NextBtnst>
    )
}

export default nextBtn;
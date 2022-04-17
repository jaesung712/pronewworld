import React from "react";
import styled from "styled-components";

const Mainheaderst = styled.div`
   .container{
       background-color: #ccc;
        width:20%;
        height: 55rem; 
        overflow:auto;
        padding:0;
        margin:0 auto;
        float: left;
        padding:1rem 1rem 3rem 1rem;
   }
   .container div:hover{
    background-color: #ccf;
   }
`;

const mainheader = (): JSX.Element =>{
    return (
        
        <Mainheaderst>
            <div className="container">
                {/* 프로필 */}
                <div className="box1">
                    <p>이재성 의 작업</p>
                </div>
                {/* 기능바 */}
                <div className="box2">
                    <ul>
                        <li>빠른 검색</li>
                        <li>모든 업데이트</li>
                        <li>설정과 멤버</li>
                    </ul>
                </div>
                {/* 즐겨찾기 */}
                <div className="box3">
                <p>즐겨찾기</p>
                </div>
                {/* 개인페이지 */}
                <div className="box4">
                <p>개인 페이지</p>
                </div>
                {/*휴지통*/}
                <div className="box5">
                <p>휴지통</p>
                </div>
                {/*새 페이지*/}
                <div className="box6">
                <p>새페이지</p>
                </div>
            </div>
            
        </Mainheaderst>
    )
}

export default mainheader;
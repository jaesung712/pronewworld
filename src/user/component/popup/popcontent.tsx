import React from "react";
import styled from "styled-components";

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
            overflow: auto;
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

const Popcontent = ():JSX.Element =>{
    return(
        <Popcontentst>
            <div className="container">
                <div className="contentbox">
                    <div className="title">
                        <h3>계정</h3>
                    </div>
                    <div className="info">
                        <p className="underline">계정 설정 변경 사항은 모든 워크스페이스에 적용됩니다.</p>
                    </div>
                    <div className="profileImg">
                        <img src="./img/이재성증명사진.jpg"></img>
                        <button>사진 업로드</button>
                    </div>
                    <hr></hr>
                    <div className="profile">
                        <h3>개인 정보</h3>
                        <p>이메일</p>
                        <div className="emailbox">
                            <h3>jaesung190@gmail.com</h3>
                            <p>이메일 변경</p>
                        </div>
                        <hr></hr>
                        <p>선호하는 이름</p>
                        <input type="text"></input>
                        <h3>비밀번호</h3>
                        <p className="underline">임시 로그인 코드를 사용하고 싶지 않으면 영구 비밀번호를 설정할 수 있습니다.</p>
                        <h3>모든 기기에서 로그아웃</h3>
                        <p>현재 세션을 제외한 모든 활성 세션에서 로그아웃되며 다시 로그인해야합니다.</p>
                        <button>로그아웃</button>
                        <hr></hr>
                        <h3>위험구역</h3>
                        <button>내 계정 삭제</button>
                    </div> 
                </div>
                
            </div>
        </Popcontentst>
    )
}
export default Popcontent;
import React from "react";
import styled from "styled-components";

const Headerpopst = styled.div`
    .popcontanier1{
        width:300px;
        height:auto;
        border:1px solid black;
        background-color:white;
        z-index:10;
        position: absolute;
        top:1.8em;
        right: 0;
        box-shadow: -4px +4px 5px gray;
        .chae{
        width:300px;
        height:20px;
        background-color:gray;
        }
        .popcontent{
            padding: 0.5em 1em 0.5em 1em;
        }

        .listbox{
            display:flex;
            height:28px;
            align-items: center;
            cursor:pointer;
            transition:all 0.15s linear;
            &:hover{
                background-color:rgba(0,0,0,0.3);
            }
            margin-bottom:3px;
        }
        .listbox img{
            width:20px;
            height:20px;
            margin-right:10px;
        }
        .last{
            border-bottom:1px solid black;
        }
        .forcnt p{
            font-size:15px;
            margin:0;
        }
    }

`

//페이지잠금 즐겨찾기추가 실행취소 삭제 페이지기록 단어수 페이지최종수정자
//폰트를 할까말까
const Headerpop = (): JSX.Element =>{
    return (
        <Headerpopst>
            <div className="popcontanier1">
                <div className="chae">
                </div>
                <div className="popcontent">
                    <div className="listbox">
                        <img className="icon" src="./icon/fav.png"></img>
                        <h4>즐겨찾기 추가</h4>
                    </div>
                    <div className="listbox">
                        <img className="icon" src="./icon/page.png"></img>
                        <h4>페이지 잠금</h4>
                    </div>
                    <div className="listbox">
                        <img className="icon" src="./icon/update.png"></img>
                        <h4>업데이트</h4>
                    </div>
                    <div className="listbox last" >
                        <img className="icon" src="./icon/trash.png"></img>
                        <h4>삭제</h4>
                    </div>
                    <div className="forcnt">
                        <p>단어수 ??개</p>
                        <p>이재성 최종 편집</p>
                        <p>어제 오후 7:30</p>
                    </div>
                </div>
            </div>
        </Headerpopst>
    )
}

export default Headerpop;
import React from "react";
import styled from "styled-components";

const Headerpopst = styled.div`
    .popcontanier{
        width:500px;
        heigth:800px;
        border:1px;
        background-color:blue;
    }

`

//페이지잠금 즐겨찾기추가 실행취소 삭제 페이지기록 단어수 페이지최종수정자
//폰트를 할까말까
const Headerpop = (): JSX.Element =>{
    return (
        <Headerpopst>
            <div className="popcontanier">
                <div className="popcontent">
                    <h3>chekc</h3>
                </div>
            </div>
        </Headerpopst>
    )
}

export default Headerpop;
import React from "react";
import styled from "styled-components"; //css 사용할 때 import시켜줘야 함
import Signinbox from "./component/signin/signinbox";
const Signinst = styled.div`
    *{text-decoration:none;}
    .container{padding-top: 1.5rem; max-width:100rem; 
`;

const signin = (): JSX.Element =>{
    return (
        <Signinst>
            <div className="container">
                <Signinbox/>
            </div>
        </Signinst>
    )
}

export default signin;
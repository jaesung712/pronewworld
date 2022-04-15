import React from "react";
import styled from "styled-components"; //css 사용할 때 import시켜줘야 함


const Loginboxst = styled.div`


`;

const loginbox = (): JSX.Element =>{
    return (
        <Loginboxst>
            <div id="si-container">
                <form>
                    <p className='login-text'>이메일</p>
                    <div>
                    <input placeholder="ID"></input>
                    </div>
                    <p className='login-text'>비밀번호</p>
                    <div>
                    <input placeholder="PW"></input>
                    </div>
                </form>
            </div>
        </Loginboxst>
        
    )
}

export default loginbox;
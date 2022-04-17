import React from "react";
import styled from "styled-components"; //css 사용할 때 import시켜줘야 함
import NextBtn from "../button/nextBtn";

const Loginboxst = styled.div`
#si-container{
    margin-top: 100px;
    text-align: center;
}
.titleA {
    font-size:25px;
    font-weight: 600;
}
.titleB {
    font-size:18px
}
.inputform {
    border-radius: 5px;
    border:0; 
    width: 300px;
    height: 40px; 
    font-size: 1rem; 
    color: black; 
    margin-bottom: 5px;
}

`;

const loginbox = (): JSX.Element =>{
    return (
        <Loginboxst>
            <div id="si-container">
                <div>
                    <div className="titleA">
                    <p>Untitled</p>
                    </div>
                    <div className="titleB">
                    <p>PLEASE NOTE YOUR IDEA</p>
                    </div>
                </div>
                <form>
                    
                    <div>
                    <input className="inputform" placeholder="ID"></input>
                    </div>
                    
                    <div>
                    <input className="inputform" placeholder="PW"></input>
                    </div>
                </form>

                
                <NextBtn></NextBtn>

            </div>
        </Loginboxst>
        
    )
}

export default loginbox;
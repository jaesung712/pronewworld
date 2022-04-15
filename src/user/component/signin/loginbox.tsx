import React from "react";
import styled from "styled-components"; //css 사용할 때 import시켜줘야 함


const Loginboxst = styled.div`


`;

const loginbox = (): JSX.Element =>{
    return (
        <Loginboxst>
            <div id="jb-container">
            
            <div id="jb-content">
                <img className="imgbox" src="./img/wallpaperbetter.jpg"></img>
            </div>

            <div id="jb-sidebar">
                
            </div>
            

    </div>
        </Loginboxst>
        
    )
}

export default loginbox;
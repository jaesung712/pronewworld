import React from "react";
import styled from "styled-components"; //css 사용할 때 import시켜줘야 함


const Signboxst = styled.div`

#jb-container {
    
    width: 940px;
    height: 500px;
    margin: 100px auto;
    
    border: 1px solid #bcbcbc;
    background-color: #A0D9D9;
    border-radius: 5px;
  }
 
  #jb-content {
    width: 500px;
    height: 500px;
    
    
    float: left;
    border-radius: 5px;
  }
  .imgbox {
    width:100%;
    height:100%;
    object-fit:cover;
    }
  #jb-sidebar {
    width: 350px;
    margin-top: 140px;
    padding: 20px;
    float: right;
    border: 1px solid #bcbcbc;
  }
  }
`;

const signinbox = (): JSX.Element =>{
    return (
        <Signboxst>
            <div id="jb-container">
            
            <div id="jb-content">
                <img className="imgbox" src="./img/wallpaperbetter.jpg"></img>
            </div>

            
            

    </div>
        </Signboxst>
        
    )
}

export default signinbox;
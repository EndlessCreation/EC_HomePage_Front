import React from 'react';
import Size from "../../../Size";
import styled from "styled-components";

const TopGrey = styled.div`
  width: 100%;
  margin: 0 auto;
  background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const GreyBox = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  box-sizing:border-box;
  padding-left: 40px;
  padding-right: 40px;
  // padding-top: 100px;
  // padding-bottom: 130px;
  opacity: 1;
  @media screen and ${Size.device.tablet} {
    max-width: 640px;
    box-sizing:border-box;
    padding-left: 16px;
    padding-right: 16px;
    // padding-top: 80px;
    // padding-bottom: 100px;
    margin: 0 auto;
  }
  @media screen and ${Size.device.moblie} {
    max-width: 320px;
    box-sizing:border-box;
    padding-left: 8px;
    padding-right: 8px;
    // padding-top: 60px;
    // padding-bottom: 80px;
    margin: 0 auto;
  }
`;

function GreyContainer({children}){
    return(
        <TopGrey>
            <GreyBox>
                {children}
            </GreyBox>
        </TopGrey>
    )
}

export default GreyContainer;
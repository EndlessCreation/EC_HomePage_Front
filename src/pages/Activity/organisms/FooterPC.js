import React from "react";
import styled from "styled-components";

const Back = styled.div`
    width: 100%;
    height: 419px;
    margin: 0;
    padding: 0;
    background-color: #232323;
`;


const Container=styled.div`
    background: ${(props) => props.background || "#232323"};
    max-width:1280px;
    box-sizing : border-box;
    padding-left :40px;
    padding-right :40px;
    margin:0 auto;
    height:100%;
    
`;

const ContainerInner=styled.div`
    width:600px;  
    float: left;
    
`;

const Logo = styled.div`
    // padding-left : 40px;
    padding-top : 100px;
    color: #f2f2f2;
    font-family: Kanit;
    line-height: 1.46;
    letter-spacing: 0.24px;
    font-size: 24px;
`;

const Name = styled.div`
  // padding-left : 40px;
  padding-top: 72px;
  padding-bottom : 120px;
  width: 461px;

  .wrapper {
    display: grid;
    grid-template-columns: 125fr 336fr ;
    grid-template-rows : 20fr 16fr 20fr 16fr 20fr ;
    
    grid-auto-rows: minmax(100px, auto);    # 최소크기는 100px 이되, 창이 이보다 작아지면 자동으로 
  }

  .t1 {
    grid-column: 1;
    grid-row: 1;
    font-family: NanumSqaureExtraBold;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: -0.36px;
    text-align: left;
    color: #d2d2d2;
  }

  .t2 {
    grid-column: 1;
    grid-row: 3;
    font-family: NanumSqaureExtraBold;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: -0.36px;
    text-align: left;
    color: #d2d2d2;

  }

  .t3 {
    grid-column: 1;
    grid-row: 5;
    font-family: NanumSqaureExtraBold;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: -0.36px;
    text-align: left;
    color: #d2d2d2;

  }


  .p1{
    grid-column: 2;
    grid-row: 1;
    font-family: NanumSqaureExtraBold;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: -0.36px;
    text-align: left;
    color: #d2d2d2;
  }

  .p2{
    grid-column: 2;
    grid-row: 3;
    font-family: NanumSqaureExtraBold;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: -0.36px;
    text-align: left;
    color: #d2d2d2;
  }

  .p3{
    grid-column: 2;
    grid-row: 5;
    font-family: NanumSqaureExtraBold;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: -0.36px;
    text-align: left;
    color: #d2d2d2;
  }

`;
const Icon = styled.div`
    float: right;
    padding-top: 100px ;

    display: flex;
    flex-direction: row;  // 옆으로 정렬

    .circle{
      width: 36px;
      height: 36px;
      margin-left:16px;
      border-radius: 68px;
      background-color: #f2f2f2;
    }
`;

const Cop = styled.div`
  float: right;
  padding-top: 138px ;

  font-family: Kanit;
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.36px;
  color: #d2d2d2;
`;

function FooterPC(){
    return(
    <Back>
    <Container>
      <ContainerInner>
      <Logo>Endless Creation</Logo>
      <Name>
        <div class ='wrapper'>
          <div class ='t1'>기획</div>
          <div class ='t2'>디자이너</div>
          <div class ='t3'>개발자</div>
          <div class='p1'>김개발 &emsp; 김개발 &emsp; 김개발</div>
          <div class='p2'>김개발 &emsp; 김개발 &emsp; 김개발</div>
          <div class='p3'>김개발 &emsp; 김개발 &emsp; 김개발</div>
        </div>
      </Name>
      </ContainerInner>
      <ContainerInner>
        <Icon>
            <div class='circle'></div>
            <div class='circle'></div>
            <div class='circle'></div>
          </Icon>
      </ContainerInner>
      <ContainerInner>
        <Cop>
            ©EndlessCreation. All rights reserved 2021.
        </Cop>
      </ContainerInner>
    </Container>
    </Back>
    )
    ;
}

export default FooterPC;
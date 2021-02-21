import React from "react";
import styled from "styled-components";
const Text = styled.div`
  width: 188px;
  height: 188px;
  font-family: NanumSquareRegualr;
  font-size: 16px;
  line-height: 28px;
  color: #fff;
  background-color: #101010;
  border-radius: 83px;
  display: flex;
  opacity: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 0;

  @media screen and (max-width: 1279px) {
    width: 140px;
    height: 140px;
  }
  @media screen and (max-width: 767px) {
    width: 144px;
    height: 144px;
  }
`;
const ItemBox = styled.div`
  width: 188px;
  height: 188px;
  position: relative;
  border-radius: 83px;
  /*
  font-family: NanumSquareRegualr;
  font-size: 16px;
  line-height: 28px;
  color: #232323;
  background-color: #b0b0b0;
  */
  img {
    width: 100%;
    height: 100%;
    border-radius: 83px;
  }
  :hover {
    ${Text} {
      opacity: 0.72;
      transition: all 0.5s;
    }
    img {
      opacity: 1;
      transition: all 0.5s;
    }
  }
  @media screen and (max-width: 1279px) {
    width: 140px;
    height: 140px;
  }
  @media screen and (max-width: 767px) {
    width: 144px;
    height: 144px;
  }
`;

function MemberItem({ HashTag, name, imageUrl, position }) {
  console.log(imageUrl);
  return (
    <ItemBox>
      <img src={imageUrl} alt={"임원진사진"} />
      <Text>
        {name} <br /> {position} <br /> {HashTag[0]}
      </Text>
    </ItemBox>
  );
}

export default MemberItem;
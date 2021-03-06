import React, { useCallback } from "react";
import styled, { css } from "styled-components";

import { useGlobalState, useGlobalDispatch } from "../../context/GlobalContext";

const Button = styled.div`
  position: absolute;

  right: 100px;
  margin-top: 10px;
  display: none;
  width: 30px;
  height: 20px;
  cursor: pointer;
  span {
    position: absolute;
    transition: 0.3s ease-in-out;
    height: 3px;
    width: 30px;
    border-radius: 7px;
    background-color: #ffffff;
    ${(props) =>
      props.ScrollState &&
      css`
        background-color: black;
      `}
    top: 0;
    transition: 0.3s;
  }
  span:nth-child(1) {
    top: -2px;
  }
  span:nth-child(2),
  span:nth-child(3) {
    top: 7px;
  }
  span:nth-child(4) {
    top: 17px;
  }
  @media screen and (max-width: 1280px) {
    display: block;
    top: 25px;
    right: 100px;
  }
  ${(props) =>
    props.active &&
    css`
      span {
        background-color: #fff;
      }
      span:nth-child(1) {
        opacity: 0;
      }
      span:nth-child(2) {
        transform: rotate(45deg);
      }
      span:nth-child(3) {
        transform: rotate(-45deg);
      }
      span:nth-child(4) {
        opacity: 0;
      }
    `}
  @media screen and (max-width:767px) {
    right: 30px;
    top: 20px;
  }
  @media screen and (max-width: 359px) {
    right: 8px;
  }
`;

function MenuButton() {
  const state = useGlobalState();
  const Active = state.NavState;
  const ScrollState = state.ScrollState;
  const dispatch = useGlobalDispatch();
  const onToggle = useCallback(() => {
    dispatch({
      type: "TOGGLE_NAVSTATE",
    });
  }, [dispatch]);
  return (
    <Button active={Active} onClick={onToggle} ScrollState={ScrollState}>
      <span />
      <span />
      <span />
      <span />
    </Button>
  );
}

export default React.memo(MenuButton);

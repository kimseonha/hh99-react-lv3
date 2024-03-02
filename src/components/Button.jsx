import React from "react";
import styled, { css } from "styled-components";
import Svg from "./Svg";

function Button() {
  const onClickAlert = () => {
    alert("버튼을 만들어 보세요!");
  };

  const onClickPrompt = () => {
    prompt("어렵나요?", "현타와요");
  };

  return (
    <>
      <h1>Button</h1>
      <div>
        <PrimaryButton onClick={onClickAlert}>
          Large Primary Button
        </PrimaryButton>
        <PrimaryButton size="medium">medium</PrimaryButton>
        <PrimaryButton size="small">small</PrimaryButton>
      </div>
      <div>
        <NegativeButton onClick={onClickPrompt}>
          Large Negative Button
          <Svg width={14} height={17} fill="black" />
        </NegativeButton>
        <NegativeButton size="medium">medium</NegativeButton>
        <NegativeButton size="small">small</NegativeButton>
      </div>
    </>
  );
}

export const PrimaryButton = styled.button`
  width: 200px;
  height: 50px;
  border: 3px solid rgb(85, 239, 196);
  border-radius: 8px;
  color: #000;
  background-color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  margin-right: 20px;

  &:active {
    background-color: #eee;
  }

  ${({ size }) => {
    switch(size) {
      case "medium":
        return css`
          width: 120px;
          height: 40px;
          background-color: rgb(85, 239, 196);
          border: none;
          &:active {
            background-color: rgb(51, 160, 129);
          }
        `;
      case "small":
        return css`
          width: 80px;
          height: 35px;
          background-color: rgb(85, 239, 196);
          border: none;
          &:active {
            background-color: rgb(51, 160, 129);
          }
        `;
        default:
    }
  }}
`;

export const NegativeButton = styled.button`
  width: 200px;
  height: 50px;
  border: 3px solid rgb(250, 177, 160);
  border-radius: 8px;
  color: rgb(214, 48, 49);
  background-color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  margin-right: 20px;

  &:active {
    background-color: #eee;
  }

  ${({ size }) => {
    switch (size) {
      case "medium":
        return css`
          width: 120px;
          height: 40px;
          background-color: rgb(250, 177, 160);
          border: none;
          &:active {
            background-color: rgb(192, 134, 121);
          }
        `;
      case "small":
        return css`
          width: 80px;
          height: 35px;
          background-color: rgb(250, 177, 160);
          border: none;
          &:active {
            background-color: rgb(192, 134, 121);
          }
        `;
        default:
    }
  }}
`;

export default Button;

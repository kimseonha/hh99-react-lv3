import React, { useState } from "react";
import styled, { css } from "styled-components";
import { PrimaryButton } from "./Button";
import { NegativeButton } from "./Button";
import { Container } from "./Input";


function Modal() {
  const [primaryOpenModal, setPrimaryOpenModal] = useState(false);
  const [negativeOpenModal, setNegativeOpenModal] = useState(false);

  const PrimaryOpenModal = () => {
    setPrimaryOpenModal(true);
  };

  const PrimaryCloseModal = () => {
    setPrimaryOpenModal(false);
  };

  const NegativeOpenModal = () => {
    setNegativeOpenModal(true);
  };

  const NegativeCloseModal = () => {
    setNegativeOpenModal(false);
  };

  return (
    <>
      <h1>Modal</h1>
      <Container>
        <PrimaryButton size="medium" onClick={PrimaryOpenModal}>
          open modal
        </PrimaryButton>
        <NegativeButton onClick={NegativeOpenModal}>open modal</NegativeButton>
      </Container>

      {primaryOpenModal && (
        <ModalContainer>
          <ModalContent>
            <p>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
              않아요.
            </p>
            <BtnItem>
              <NegativeButton size="small" onClick={PrimaryCloseModal}>
                닫기
              </NegativeButton>
              <PrimaryButton size="small">확인</PrimaryButton>
            </BtnItem>
          </ModalContent>
        </ModalContainer>
      )}

      {negativeOpenModal && (
        <ModalContainer onClick={NegativeCloseModal}>
          <ModalContent size="small" onClick={(e) => e.stopPropagation()}>
            <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
              <CircleBtn onClick={NegativeCloseModal}>X</CircleBtn>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}

// 모달 컨테이너
const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(221, 221, 221, 0.8);
  z-index: 99;
`;

// 모달 내용 스타일
const ModalContent = styled.div`
  background-color: #fff;
  width: 500px;
  height: 300px;
  padding: 24px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  z-index: 5;

  ${({ size }) => { 

  switch(size){
    case "small":
      return css`
      width: 300px;
      height: 170px;
      `
    default:
  }
}
  }
`;

// 버튼 정렬
const BtnItem = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 200px;
`;

const CircleBtn = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid #eee;
  border: none;
  border-radius: 50%;
  background-color: #eee;
  position: fixed;
  top: 10px;
  right: 10px;

  &:hover{
    border: 1px solid #000;
  }
`

export default Modal;

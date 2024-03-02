import React, { useState } from "react";
import styled from "styled-components";

function Select() {
  const [showOptions1, setShowOptions1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("");

  const [showOptions2, setShowOptions2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("");

  const options = ["리액트", "자바", "스프링", "리액트네이티브"];

  const toggleOptions1 = () => {
    setShowOptions1(!showOptions1);
  };

  const toggleOptions2 = () => {
    setShowOptions2(!showOptions2);
  };

  const handleOptionClick1 = (value) => {
    setSelectedOption1(value);
    setShowOptions1(false);
  };

  const handleOptionClick2 = (value) => {
    setSelectedOption2(value);
    setShowOptions2(false);
  };

  return (
    <>
    <SelectBox>
      <h1>Select</h1>
      <In>
        <div>
        <LabelContainer onClick={toggleOptions1} onBlur={()=>setShowOptions1(false)} tabIndex={0}>
          <Label>
            <div>{selectedOption1 || "리액트"}</div>
            <div>▼</div>
          </Label>
        </LabelContainer>
        {showOptions1 && (
          <SelectOptions className="outOption">
            {options.map((option, index) => (
              <Option key={index} onMouseDown={() => handleOptionClick1(option)} >
                {option}
              </Option>
            ))}
          </SelectOptions>
        )}
        </div>
        <div>
        <LabelContainer onClick={toggleOptions2} onBlur={()=>setShowOptions2(false)} tabIndex={0}>
          <Label>
            <div>{selectedOption2 || "리액트"}</div>
            <div>▼</div>
          </Label>
        </LabelContainer>
        {showOptions2 && (
          <SelectOptions >
            {options.map((option, index) => (
              <Option key={index} onMouseDown={() => handleOptionClick2(option)}>
                {option}
              </Option>
            ))}
          </SelectOptions>
        )}
        </div>
      </In>
    </SelectBox>
    </>
  );
}

const SelectBox = styled.div`
  margin-top: 50px;
  position: relative;
`;

const In = styled.div`
  height: 100px;
  padding: 20px 30px;
  display: flex;
  gap: 30px;
  overflow: hidden;
  border: 3px solid rgb(221, 221, 221);
  .outOption {
    position: absolute;
  }
`;
const LabelContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Label = styled.div`
  font-size: 14px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 220px;
  padding: 0 30px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 15px;
  cursor: pointer;
`;

const SelectOptions = styled.div`
  list-style: none;
  width: 280px;
  display: block;
`;

const Option = styled.div`
  font-size: 12px;
  line-height: 40px;
  width: 280px;
  height: 40px;
  border-radius: 10px;
  background-color: #ffffff;
  z-index: 9;
  &:hover {
    background-color: #eee;
  }
`;

export default Select;

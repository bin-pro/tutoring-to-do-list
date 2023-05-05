import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputField = styled.input`
  width: 150px;
  margin-right: 10px;
  border-radius: 10px;
`;

const AddButton = styled.button`
  background-color: #007bff;
  border: none;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border-radius: 25px;
`;

const Input = ({ setToDoItemDataList }) => {
  const [inputValue, setInputValue] = useState("");

  const addToDoItemData = (content) => {
    setToDoItemDataList((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        content: content,
        isChecked: false,
        isUpdating: false,
      },
    ]);
  };

  const onChangeInput = (event) => {
    setInputValue(() => event.target.value);
  };

  const onClickAddButton = () => {
    if (inputValue === "") {
      alert("공백을 입력할 수 없습니다.");
      return;
    }
    addToDoItemData(inputValue);
    setInputValue(() => "");
  };

  return (
    <InputWrapper>
      <InputField
        type="text"
        value={inputValue}
        onChange={onChangeInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addToDoItemData(inputValue);
            setInputValue("");
          }
        }}
      />
      <AddButton onClick={onClickAddButton}>Add</AddButton>
    </InputWrapper>
  );
};

export default Input;

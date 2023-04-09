import React, { useState } from "react";

const Input = ({ setToDoItemDataList }) => {
  const [inputValue, setInputValue] = useState("");

  const onClickAddToDoItemData = (content) => () => {
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

  const onClickAddButton = () => () => {
    onClickAddToDoItemData(inputValue)();
    setInputValue(() => "");
  };
  //버튼 누르면 state에 데이터 추가
  return (
    <div className="input_wrapper">
      <input type="text" value={inputValue} onChange={onChangeInput}></input>
      <button onClick={onClickAddButton()}>Add</button>
    </div>
  );
  /*
  input은 원래도 값이 바뀌면 리렌더링되었던건데 굳이 state로 관리하는 이유가 뭘까?
  input의 값이 변경되면 컴포넌트가 리렌더링됩니다. 하지만 이 값은 컴포넌트 내부에서만 사용되고, 다른 컴포넌트와 공유되지 않습니다. 
  따라서 이 값을 부모 컴포넌트에서 사용해야 하는 경우, props로 전달할 수 없고 state로 관리해야 합니다. 
  부모 컴포넌트에서 input의 값을 사용하기 위해서는 onChange 이벤트로 상태를 업데이트하고, 그 값을 부모 컴포넌트로 전달해야 합니다. 
  이렇게 state로 관리하면 input 값의 변경사항이 부모 컴포넌트까지 전파되어 필요한 처리를 할 수 있습니다.
  */
};

export default Input;

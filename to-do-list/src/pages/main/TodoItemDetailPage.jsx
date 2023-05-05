import React, { useState } from "react";

const TodoItemDetailPage = ({
  match,
  toDoItemDataList,
  setToDoItemDataList,
}) => {
  const id = parseInt(match.params.id, 10);
  const toDoItem = toDoItemDataList.find((item) => item.id === id);

  const [updateInputValue, setUpdateInputValue] = useState(toDoItem.content);

  if (!toDoItem) {
    return <div>존재하지 않는 아이템입니다.</div>;
  }

  const onChangeInput = (event) => {
    const value = event.target.value;
    setUpdateInputValue(value);
  };

  const onClickUpdate = () => {
    setToDoItemDataList((prevState) => {
      const updatedList = [...prevState];
      const index = updatedList.findIndex((item) => item.id === id);
      updatedList[index] = {
        ...updatedList[index],
        content: updateInputValue,
      };
      return updatedList;
    });
  };

  const onClickDelete = () => {
    setToDoItemDataList((prevState) => {
      const updatedList = prevState.filter((item) => item.id !== id);
      return updatedList;
    });
  };

  return (
    <div>
      <h1>ToDo 아이템 상세 페이지</h1>
      <div>
        <input type="text" value={updateInputValue} onChange={onChangeInput} />
        <button onClick={onClickUpdate}>수정</button>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItemDetailPage;

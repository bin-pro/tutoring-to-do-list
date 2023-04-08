import React, { useState } from "react";
import Input from "../../components/input/index";
import ToDoItem from "../../components/todolist/index";

const Main = () => {
  const [toDoItemDataList, setToDoItemDataList] = useState([]);

  const onClickAddToDoItemData = (content) => () => {
    setToDoItemDataList((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        content: content,
        isChecked: false,
      },
    ]);
  };

  const onClickUpdateToDoItemData = (id, content) => () => {
    setToDoItemDataList((prevState) => {
      const updatedList = [...prevState]; //일단 이전 상태를 복사해서 새로운 배열을 만듭니다.
      updatedList[id - 1] = { ...updatedList[id - 1], content: content };
      //업데이트할 아이템의 인덱스(id-1)에 해당하는 원소를 복사한 후 content를 업데이트합니다.
      return updatedList;
    });
  };

  const onClickDeleteToDoItemData = (id) => () => {
    setToDoItemDataList((prevState) => {
      const updatedList = [...prevState].filter(
        (listItem) => id !== listItem.id
      );
      return updatedList.map((listItem) =>
        listItem.id > id ? { ...listItem, id: listItem.id - 1 } : listItem
      );
    });
  };

  return (
    <div className="main">
      <div className="header">
        <h1>to do list</h1>
      </div>

      <div className="body">
        <Input onClickAddToDoItemData={onClickAddToDoItemData} />
        <ul className="todo_item_list">
          <ToDoItem
            toDoItemDataList={toDoItemDataList}
            onClickUpdateToDoItemData={onClickUpdateToDoItemData}
            onClickDeleteToDoItemData={onClickDeleteToDoItemData}
          />
        </ul>
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default Main;

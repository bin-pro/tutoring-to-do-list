import React, { useState } from "react";
import index from "./index.css";

const ToDoItem = ({ toDoItemDataList, setToDoItemDataList }) => {
  const [updateInputValue, setUpdateInputValue] = useState("");

  const onClickUpdate = (id) => () => {
    setToDoItemDataList((prevState) => {
      const updatedList = [...prevState];
      updatedList[id - 1] = {
        ...updatedList[id - 1],
        isUpdating: !updatedList[id - 1].isUpdating,
      };
      return updatedList;
    });
  };

  const onChangeInput = (id) => (event) => {
    const value = event.target.value;
    setUpdateInputValue(() => value);

    setToDoItemDataList((prevState) => {
      const updatedList = [...prevState];
      updatedList[id - 1] = {
        ...updatedList[id - 1],
        content: value,
      };
      return updatedList;
    });
  };

  const onChangeCheckbox = (id) => () => {
    setToDoItemDataList((prevState) => {
      const updatedList = [...prevState]; //일단 이전 상태를 복사해서 새로운 배열을 만듭니다.
      updatedList[id - 1] = {
        ...updatedList[id - 1],
        isChecked: !updatedList[id - 1].isChecked,
      };
      //console.log("id:", id, "isChecked:", updatedList[id - 1].isChecked);
      return updatedList;
    });
  };

  const onClickDeleteToDoItemData = (id) => () => {
    setToDoItemDataList((prevState) => {
      const updatedList = [...prevState].filter(
        (listItem) => id !== listItem.id
      );
      return updatedList.map((listItem) => {
        if (listItem.id > id) {
          return {
            ...listItem,
            id: listItem.id - 1,
          };
        } else {
          return listItem;
        }
      });
    });
  };

  return toDoItemDataList.map((toDoItemData) => {
    var isCheckedThenLineThrough = toDoItemData.isChecked ? "checked" : "";

    const renderListContent = () => {
      if (!toDoItemData.isUpdating) {
        return (
          <li
            key={`todo_item_${toDoItemData.id}`}
            className={`${isCheckedThenLineThrough}`}
          >
            {toDoItemData.content}
          </li>
        );
      }
      if (toDoItemData.isUpdating) {
        return (
          <input
            key={`todo_item_updating_${toDoItemData.id}`}
            type="text"
            value={toDoItemData.content}
            onChange={onChangeInput(toDoItemData.id)}
          />
        );
      }
    };

    var updateToggle = onClickUpdate(toDoItemData.id);

    return (
      <div
        key={`todo_item_wrapper_${toDoItemData.id}`}
        className="todo_item_container"
      >
        {renderListContent()}

        <input
          key={`todo_checkbox_${toDoItemData.id}`}
          type="checkbox"
          onChange={onChangeCheckbox(toDoItemData.id)}
          checked={toDoItemData.isChecked}
        ></input>
        <button onClick={onClickDeleteToDoItemData(toDoItemData.id)}>X</button>
        <button onClick={updateToggle}>수정</button>
      </div>
    );
  });
};

export default ToDoItem;

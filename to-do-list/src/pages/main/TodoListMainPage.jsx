import React, { useState } from "react";
import Input from "../../components/input/index";
import ToDoItem from "../../components/todolist/index";
import "./index.css";

const Main = () => {
  const [toDoItemDataList, setToDoItemDataList] = useState([]);

  return (
    <div className="main">
      <div className="header">
        <h1>to do list</h1>
      </div>

      <div className="body">
        <Input setToDoItemDataList={setToDoItemDataList} />
        <ul className="todo_item_list">
          <ToDoItem
            toDoItemDataList={toDoItemDataList}
            setToDoItemDataList={setToDoItemDataList}
          />
        </ul>
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default Main;

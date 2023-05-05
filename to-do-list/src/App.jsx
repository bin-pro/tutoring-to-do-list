import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoListPage from "./pages/main/TodoListMainPage";
import TodoItemDetailPage from "./pages/main/TodoItemDetailPage";

function App() {
  const [toDoItemDataList, setToDoItemDataList] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <TodoListPage
              toDoItemDataList={toDoItemDataList}
              setToDoItemDataList={setToDoItemDataList}
            />
          }
        />
        <Route
          path="/todo/:id"
          element={
            <TodoItemDetailPage
              toDoItemDataList={toDoItemDataList}
              setToDoItemDataList={setToDoItemDataList}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

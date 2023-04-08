const ToDoItem = ({
  toDoItemDataList,
  onClickUpdateToDoItemData,
  onClickDeleteToDoItemData,
}) => {
  return toDoItemDataList.map((toDoItemData) => {
    return <li key={`todo_item_${toDoItemData.id}`}>{toDoItemData.content}</li>;
  });
};

export default ToDoItem;

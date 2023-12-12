import "./css/todoItems.css";
export const TodoItems = ({ id, text, display, setTodos }) => {
  const deleteTodo = (id) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((item) => item.id !== id);
    setTodos(data);
  };

  const toggle = () => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };

  return (
    <div className="todo__items">
      <div
        className={"todo__item-container"}
        onClick={() => {
          toggle(id);
        }}
      >
        {display === "" ? (
          <span className="ri-circle-line todo__icon"></span>
        ) : (
          <span className="ri-checkbox-circle-fill todo__icon"></span>
        )}
        <p className={`todo__items-text  ${display}`}>{text}</p>
      </div>
      <span
        onClick={() => {
          deleteTodo(id);
        }}
      >
        <i className="ri-delete-bin-fill todo__icon todo__remove"></i>
      </span>
    </div>
  );
};

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, modifyTodo, toggleTodo } from "../features/todo/todoSlice";

const TodoItemView = ({ todo }) => {
  const dispatch = useDispatch();

  const [isModifyMode, setIsModifyMode] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (isModifyMode) {
      setInput(todo.todo);
    } else {
      setInput("");
    }
  }, [isModifyMode, todo.todo]);

  const onChangeCheck = (e) => {
    if (e.target.checked) {
      dispatch(toggleTodo(todo.id));
    } else {
      dispatch(toggleTodo(todo.id));
    }
  };

  const onClickConfirmButton = () => {
    dispatch(modifyTodo({ id: todo.id, todo: input }));
    setIsModifyMode(false);
  };

  return (
    <div>
      <li>
        {isModifyMode ? (
          <>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => setIsModifyMode(false)}>CANCEL</button>
            <button onClick={onClickConfirmButton}>CONFIRM</button>
          </>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={todo.isCheck}
              onChange={onChangeCheck}
            />
            <span
              style={todo.isCheck ? { textDecoration: "line-through" } : {}}
            >
              {todo.todo}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              DELETE
            </button>
            <button onClick={() => setIsModifyMode((prevState) => !prevState)}>
              MODIFY
            </button>
          </div>
        )}
      </li>
    </div>
  );
};

export default TodoItemView;

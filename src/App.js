import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItemView from "./components/TodoItemView";
import { addTodo } from "./features/todo/todoSlice";

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);

  const [input, setInput] = useState("");
  const id = useRef(1);

  const onClickAddButton = () => {
    dispatch(addTodo({ id: id.current, todo: input, isCheck: false }));
    id.current += 1;
    setInput("");
  };

  return (
    <>
      <h1>STUDY REDUX TOOLKIT JS</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={onClickAddButton}>ADD</button>

      <ul>
        {todoList.map((todo) => (
          <TodoItemView key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default App;

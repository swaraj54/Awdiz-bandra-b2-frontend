import React, { useEffect } from "react";

const Todo = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [todos, setTodos] = React.useState([
    { todo: "Eat dinnner", index: 0 },
    { todo: "Eat dinnner", index: 1 },
    { todo: "Eat dinnner", index: 2 },
    { todo: "Eat dinnner", index: 3 },
    { todo: "Eat dinnner", index: 4 },
    { todo: "Eat dinnner", index: 5 },
    { todo: "Eat dinnner", index: 6 },
    { todo: "Eat dinnner", index: 7 },
    { todo: "Eat dinnner", index: 8 },
    { todo: "Eat dinnner", index: 9 },
    { todo: "Eat dinnner", index: 10 },
    { todo: "Eat dinnner", index: 11 },
  ]);
  const [displayTodos, setDisplayTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState("");
  const [index, setIndex] = React.useState(1);
  function handleChange(event) {
    const value = event.target.value;
    // console.log(value, "value");
    setNewTodo(value);
  }
  function handleSubmit() {
    setTodos([...todos, { todo: newTodo, index: index }]);
    setNewTodo("");
    setIndex(index + 1);
  }
  function deleteTodo(index) {
    alert(index);
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  }
  console.log(todos, "todos");
  function displayNext10Element() {
    // check if next page exists
    setCurrentPage(currentPage + 1);
  }
  function displayPrev10Element() {
    setCurrentPage(currentPage - 1);
  }
  useEffect(() => {
    setDisplayTodos(todos.slice((currentPage - 1) * 10, currentPage * 10));
  }, [todos, currentPage]);
  return (
    <div>
      <h1>Todo Application:</h1>
      <input value={newTodo} onChange={handleChange} />
      <br />
      <button onClick={handleSubmit}>Create Todo</button>
      {displayTodos.map((todoObject, index) => (
        <div style={{ display: "flex", gap: "10px" }} key={todoObject.index}>
          <h1>
            {todoObject.index + 1}.{todoObject.todo}
          </h1>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {currentPage > 1 && (
          <button onClick={displayPrev10Element}>Prev 10 Todos</button>
        )}
        <p>Page No: {currentPage}</p>
        <button onClick={displayNext10Element}>Next 10 Todos</button>
      </div>
    </div>
  );
};

export default Todo;

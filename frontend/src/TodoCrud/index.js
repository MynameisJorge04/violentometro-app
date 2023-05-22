import React, { useState, useEffect } from "react";
import axios from "axios";

import "./TodoCrud.css";

const TodoCrud = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [updateQ1, setUpdateQ1] = useState("");
  const [updateQ2, setUpdateQ2] = useState("");
  const [updateQ3, setUpdateQ3] = useState("");
  const [updateQ4, setUpdateQ4] = useState("");
  const [updateQ5, setUpdateQ5] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:4000/tasks");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const updateTodo = async (id, q1, q2, q3, q4, q5) => {
    try {
      await axios.put(`http://localhost:4000/tasks/${id}`, { q1, q2, q3, q4, q5 });
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, q1, q2, q3, q4, q5 } : todo
      );
      setTodos(updatedTodos);
      setSelectedTodo(null);
      setUpdateQ1("");
      setUpdateQ2("");
      setUpdateQ3("");
      setUpdateQ4("");
      setUpdateQ5("");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/tasks/${id}`);
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      setSelectedTodo(null);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };


return (
  <div className="todo-crud">
    <h1>Todo CRUD</h1>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Q1</th>
          <th>Q2</th>
          <th>Q3</th>
          <th>Q4</th>
          <th>Q5</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.q1}</td>
            <td>{todo.q2}</td>
            <td>{todo.q3}</td>
            <td>{todo.q4}</td>
            <td>{todo.q5}</td>
            <td>
              <button onClick={() => setSelectedTodo(todo)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {selectedTodo && (
      <div className="update-form">
        <input type="text" value={updateQ1} onChange={(e) => setUpdateQ1(e.target.value)} placeholder="Enter updated Q1" />
        <input type="text" value={updateQ2} onChange={(e) => setUpdateQ2(e.target.value)} placeholder="Enter updated Q2" />
        <input type="text" value={updateQ3} onChange={(e) => setUpdateQ3(e.target.value)} placeholder="Enter updated Q3" />
        <input type="text" value={updateQ4} onChange={(e) => setUpdateQ4(e.target.value)} placeholder="Enter updated Q4" />
        <input type="text" value={updateQ5} onChange={(e) => setUpdateQ5(e.target.value)} placeholder="Enter updated Q5" />
        <button onClick={() => updateTodo(selectedTodo.id, updateQ1, updateQ2, updateQ3, updateQ4, updateQ5)}>Update</button>
        <button onClick={() => setSelectedTodo(null)}>Cancel</button>
      </div>
    )}
  </div>
);
}

export default TodoCrud;
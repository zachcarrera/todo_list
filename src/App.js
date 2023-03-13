import "./App.css";
import { useState } from "react";
import { TodoForm } from "./components/TodoForm";

const starterTodo = [
    { text: "walk the dog", isCompleted: false },
    { text: "feed the cat", isCompleted: false },
    { text: "take out the trash", isCompleted: false },
    { text: "wash the car", isCompleted: false },
];

function App() {
    const [todoList, setTodoList] = useState(starterTodo);

    // const [todoForm, setTodoForm] = useState("");
    // make new func addNewTodo
    const addNewTodo = (newTodo) => {
        setTodoList([newTodo, ...todoList]);
    };

    const handleComplete = (completedIndex) => {
        const newTodo = todoList.map((todo, index) => {
            const indvidualTodo = { ...todo };
            if (index === completedIndex) {
                indvidualTodo.isCompleted = !indvidualTodo.isCompleted;
            }
            return indvidualTodo;
        });
        setTodoList(newTodo);
    };

    const handleDelete = (deleteIndex) => {
        const newTodo = todoList.filter((todo, index) => {
            return deleteIndex !== index;
        });
        setTodoList(newTodo);
    };
    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoForm addNewTodo={addNewTodo} />
            <ul>
                {todoList.map((todo, index) => (
                    <li key={index}>
                        <span>{todo.text}</span>
                        <input
                            type="checkbox"
                            name="completed"
                            checked={todo.isCompleted}
                            onChange={(e) => handleComplete(index)}
                        />
                        <button onClick={(e) => handleDelete(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

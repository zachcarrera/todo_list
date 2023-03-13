import React from "react";
import { useState, useEffect } from "react";
import { OneTodo } from "./OneTodo";
import { TodoForm } from "./TodoForm";

export const TodoList = (props) => {
    const [todoList, setTodoList] = useState(
        JSON.parse(localStorage.getItem("todoList"))
    );

    useEffect(() => {
        const storageTodoList = JSON.parse(localStorage.getItem("todoList"));

        if (storageTodoList) {
            setTodoList(storageTodoList);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

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
        <div>
            <TodoForm addNewTodo={addNewTodo} />
            <ul className="list-group list-group-flush">
                {todoList.map((todo, index) => (
                    <OneTodo
                        key={index}
                        handleComplete={handleComplete}
                        handleDelete={handleDelete}
                        todo={todo}
                        index={index}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

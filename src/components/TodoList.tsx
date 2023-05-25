import React from "react";
import { useState, useEffect } from "react";
import { OneTodo } from "./OneTodo";
import { TodoForm } from "./TodoForm";

export type Todo = {
    text: string;
    isCompleted: boolean;
};

export const TodoList = () => {
    const storageTodoList = JSON.parse(
        localStorage.getItem("todoList") || "[]"
    );
    const [todoList, setTodoList] = useState<Todo[]>(
        storageTodoList === null ? [] : storageTodoList
    );

    useEffect(() => {
        const storageTodoList = JSON.parse(
            localStorage.getItem("todoList") || "[]"
        );

        setTodoList(storageTodoList);
    }, []);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    const addNewTodo = (newTodo: Todo) => {
        setTodoList([newTodo, ...todoList]);
    };

    const handleComplete = (completedIndex: number) => {
        const newTodo = todoList.map((todo, index) => {
            if (index === completedIndex) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                };
            }
            return todo;
        });
        setTodoList(newTodo);
    };

    const handleDelete = (deleteIndex: number) => {
        const newTodos = todoList.filter((_, index) => {
            return deleteIndex !== index;
        });
        setTodoList(newTodos);
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

import React from "react";
import { OneTodo } from "./OneTodo";
import { TodoForm } from "./TodoForm";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type Todo = {
    text: string;
    isCompleted: boolean;
};

export const TodoList = () => {
    const [todoList, setTodoList] = useLocalStorage<Todo[]>("todoList", []);

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

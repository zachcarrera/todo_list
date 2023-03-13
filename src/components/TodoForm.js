import React from "react";
import { useState } from "react";

export const TodoForm = (props) => {
    const [todoForm, setTodoForm] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = { text: todoForm, isCompleted: false };
        props.addNewTodo(newTodo);
        setTodoForm("");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todoName"
                    value={todoForm}
                    onChange={(e) => setTodoForm(e.target.value)}
                />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default TodoForm;

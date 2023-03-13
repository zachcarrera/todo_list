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
        <form
            onSubmit={handleSubmit}
            className="row d-flex justify-content-center mb-3"
        >
            <div className="col-8 me-2 p-0">
                <input
                    type="text"
                    name="todoName"
                    value={todoForm}
                    onChange={(e) => setTodoForm(e.target.value)}
                    className="form-control"
                />
            </div>
            <input
                type="submit"
                value="Add"
                className="btn btn-primary col-3"
            />
        </form>
    );
};

export default TodoForm;

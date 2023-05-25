import React from "react";
import { useState } from "react";
import { Todo } from "./TodoList";

type TodoFormProps = {
    addNewTodo: (newTodo: Todo) => void;
};

export const TodoForm = (props: TodoFormProps) => {
    const { addNewTodo } = props;
    const [todoForm, setTodoForm] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTodo = { text: todoForm, isCompleted: false } as Todo;
        addNewTodo(newTodo);
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

export default TodoFormProps;

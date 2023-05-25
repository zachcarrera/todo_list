import React from "react";

type OneTodoProp = {
    todo: {
        text: string;
        isCompleted: boolean;
    };
    index: number;
    handleComplete: (index: number) => void;
    handleDelete: (index: number) => void;
};

export const OneTodo = (props: OneTodoProp) => {
    const {
        todo: { text, isCompleted },
        index,
        handleComplete,
        handleDelete,
    } = props;

    const styling = { textDecoration: isCompleted ? "line-through" : "none" };

    return (
        <div>
            <li className="list-group-item d-flex align-items-center justify-content-center">
                <input
                    type="checkbox"
                    className="form-check-input me-2"
                    name="completed"
                    id={`${text}-${index}`}
                    checked={isCompleted}
                    onChange={(e) => handleComplete(index)}
                />
                <label
                    style={styling}
                    className="form-check-label me-3"
                    htmlFor={`${text}-${index}`}
                >
                    {text}
                </label>
                <button
                    onClick={(e) => handleDelete(index)}
                    className="btn btn-outline-danger"
                >
                    Delete
                </button>
            </li>
        </div>
    );
};

export default OneTodo;

import React from "react";

export const OneTodo = (props) => {
    const {
        todo: { text, isCompleted },
        index,
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
                    onChange={(e) => props.handleComplete(index)}
                />
                <label
                    style={styling}
                    className="form-check-label me-3"
                    htmlFor={`${text}-${index}`}
                >
                    {text}
                </label>
                <button
                    onClick={(e) => props.handleDelete(index)}
                    className="btn btn-outline-danger"
                >
                    Delete
                </button>
            </li>
        </div>
    );
};

export default OneTodo;

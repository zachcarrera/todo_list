import React from "react";

export const OneTodo = (props) => {
    const {
        todo: { text, isCompleted },
        index,
    } = props;
    const styling = { textDecoration: isCompleted ? "line-through" : "none" };
    return (
        <div>
            <li>
                <input
                    type="checkbox"
                    name="completed"
                    checked={isCompleted}
                    onChange={(e) => props.handleComplete(index)}
                />
                <span style={styling}>{text}</span>
                <button onClick={(e) => props.handleDelete(index)}>
                    Delete
                </button>
            </li>
        </div>
    );
};

export default OneTodo;

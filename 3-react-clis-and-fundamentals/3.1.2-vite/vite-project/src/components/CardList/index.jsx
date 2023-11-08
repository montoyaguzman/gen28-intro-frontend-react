import React from "react";
import "./styles.css";

function CardList({ children }) {

    // const children = props.children;
    // const { children } = props;

    return (
        <>
            <div className="card-container">
                {children}
            </div>
        </>
    )
}

export { CardList };
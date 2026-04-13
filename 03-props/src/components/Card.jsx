import React from "react";

function Card(props) {
    return (
        <div>
            <h1>Card</h1>
            <p>Name: {props.user}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Card
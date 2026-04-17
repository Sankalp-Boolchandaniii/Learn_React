import React from "react";

function Card(user, age) {
    return (
        <div>
            <h1>Card</h1>
            <p>Name: {user}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default Card
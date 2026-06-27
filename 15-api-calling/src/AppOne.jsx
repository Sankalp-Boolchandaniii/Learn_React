import React, { useState } from "react";

const AppOne = () => {
  const [display, setDisplay] = useState([]);

  const getResponseFromLink = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await resp.json();
    setDisplay((prev) => [...prev, data]);
    console.log(display);
  };

  return (
    <div>
      {display.map(function (elem, idx) {
        return (
          <div key={idx}>
            <h3>{elem.title}</h3>
          </div>
        );
      })}
      <button onClick={getResponseFromLink}>click</button>
    </div>
  );
};

export default AppOne;

import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("xd");
  const [userString, setuserString] = useState("");

  function btnClick() {
    localStorage.setItem("name", "sankalp");
    setName(localStorage.getItem("name"));
  }

  function btnClickTwo() {
    localStorage.removeItem("name");
    localStorage.setItem("age", 18);
  }

  const user = {
    name: "sankalp",
    age: 26,
    status: "lost af",
  };

  function setUserCorrect() {
    localStorage.setItem("user", JSON.stringify(user)); // converts string into json
    setuserString(JSON.stringify(user));
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={btnClick}>click here</button>
      <button onClick={btnClickTwo}>click here too</button>
      <hr />
      <button
        onClick={() => {
          localStorage.setItem("user", user);
        }}
      >
        set user
      </button>
      <p>this would set the value as [object Object] in local storage</p>
      <hr />
      <button onClick={setUserCorrect}>set user correctly</button>
      <p>this would set the correct value</p>
      <hr />
      <p>print user on console</p>
      <button
        onClick={() => {
          console.log(JSON.parse(userString)); // json.parse converts string into json
        }}
      >
        click
      </button>
      <hr />
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        clear all
      </button>
    </div>
  );
};

export default App;

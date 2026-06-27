import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(
    function (params) {
      console.log("a is changing......");
    },
    [a], // dependency, based on what element change the useEffect would run, always in an array[]
  );

  useEffect(
    function (params) {
      console.log("b is changing......");
    },
    [b], // dependency, based on what element change the useEffect would run, always in an array[]
  );

  return (
    <div>
      <h1>{a}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        change A
      </button>
      <hr />
      <h1>{b}</h1>
      <button
        onClick={() => {
          setB(b + 1);
        }}
      >
        change B
      </button>
      <hr />
    </div>
  );
};

export default App;

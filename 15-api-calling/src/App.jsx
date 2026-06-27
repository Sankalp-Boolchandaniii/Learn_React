import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  async function GetRespWithAxios() {
    const data = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments",
    );
    console.log(data.data);
    setData(data.data);
  }

  return (
    <div>
      {data.map(function (elem, idx) {
        return (
          <div key={idx}>
            <h6>{elem.id + " | " + elem.name + " | " + elem.email}</h6>
          </div>
        );
      })}
      <button onClick={GetRespWithAxios}>click</button>
    </div>
  );
};

export default App;

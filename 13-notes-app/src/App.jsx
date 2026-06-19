import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);

  function submitHandle(e) {
    e.preventDefault();
    setTask((prev) => [...prev, { title, desc }]);
    setTitle("");
    setDesc("");
  }

  function deleteNote(id) {
    setTask((prev) => prev.splice(id, 1));
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandle(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          name="text"
          className="px-5 w-full font-medium h-32 py-2 flex item-start flex-row border-2 outline-none rounded"
          placeholder="Write Details"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-white font-medium w-full outline-none text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-start h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div key={idx} className="h-52 w-40 rounded-2xl bg-white">
                <div className="bg-amber-400 w-full h-full flex flex-col">
                  <h3 className="bg-blue-300 text-black">{elem.title}</h3>
                  <p className="text-black p-5">{elem.desc}</p>
                  <button
                    onClick={() => {
                      deleteNote(idx);
                    }}
                    className="border-2 bg-white text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

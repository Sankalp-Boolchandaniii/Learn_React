function App() {
  return (
    <>
      <div className="text-5xl font-bold bg-red-500">
        <h1>Installing tailwind</h1>
      </div>
      <div className="xd">
        <p>go to tailwind website</p>
        <p>after getting started, add the things to vite config or whatever your project is based out of</p>
        <p>after that, add the tailwind annotations to index.css</p>
        <p>and start using it</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Button 1</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Button 2</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Button 3</button>
      </div>
    </>
  )
}

export default App

import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('');

  function onSubitHandle(e){
    e.preventDefault()
    console.log(title+"! submitted form")
    setTitle('')
  }
  
  return (
    <div>
      <form onSubmit={(e)=>{
        onSubitHandle(e)
      }}>
        <input type="text" placeholder='enter text'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
          console.log(e.target.value)
        }}
        />
        <button>submit</button>
        <hr /><h1>{title}</h1>
      </form>
    </div>
  )
}

export default App

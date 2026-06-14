import React from 'react'

const App = () => {

  // why was this required?? 
  // by default the natural behavior of a form is when submitted, the page reloads 
  // so whatever changes(console logs, renders, etc) are reloaded.
  // To avoid this, we use preventDefault() method
  function onSubmitHandle(e) {
    e.preventDefault()
    console.log("did it reload? no it didn't")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        onSubmitHandle(e)
      }}>
        <input type="text" placeholder='enter text' name='xd'/>
        <button>click me</button>
      </form>
    </div>
  )
}

export default App
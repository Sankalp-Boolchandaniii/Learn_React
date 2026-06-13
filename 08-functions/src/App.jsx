const App = () => {
  return (
    <>
      <button 
      onMouseEnter={() => { console.log("Mouse Entered") }} 
      onClick={btnClicked} 
      onDoubleClick={()=>{mouseDoubleClicked()}}>Click Me</button>
    </>
  )
}

function btnClicked(elem) {
  console.log("Button Clicked")
}

function mouseDoubleClicked(){
  console.log("Mouse Double Clicked")
}

export default App;
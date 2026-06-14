import { useState } from "react";

const App =() =>{

  const [user, setUser] = useState({name: "sankalp", age: 25, role: "dev"});

  const [arr, setarr] = useState([10, 20, 30]);

  // why this wont work? by using this way, we update the object in the existing memory location, 
  // and since react is lazy, it does not renders this on the screen
  function increaseAge(){
    user.age=26
    setUser(user)
    console.log(user)
  }
  // correct way is to use spread operator (...)

  // using spread operator, correct way
  function increaseAgeCorrect() {
    setUser(prevUser=>({
      ...prevUser, age: user.age+1
    }))
  }

  function decreaseAgeCorrect() {
    setUser(prevUser=>({
      ...prevUser, age: user.age-1
    }))
  }

  function changeRole() {
    let roleVal=user.role
    if (roleVal==="dev"){
      setUser(prevUser=>({
        ...prevUser, role: "senior dev"
      }))
    } else if (roleVal==="senior dev"){
      setUser(prevUser=>({
        ...prevUser, role: "dev"
      }))
    }
  }

  // and below is to update arrays using spread operator
  function updateArrLast(){
    var lastNum= arr[arr.length-1]
    setarr(prevArr=>[...prevArr, lastNum+10])
  }

  function updateArrFirst(){
    var lastNum= arr[0]
    setarr(prevArr=>[lastNum-10, ...prevArr])
  }

  return(
    <>
    <h1>{console.log(user)}{user.age}</h1>
    <button onClick={increaseAge}>increase age</button>
    <button onClick={decreaseAgeCorrect}>decrease age</button>
    <button onClick={changeRole}>change role</button>
    <button onClick={increaseAgeCorrect}>increase age correct</button>
    <h1>{user.role}</h1>
    <hr></hr>
    <h1>{arr}</h1>
    <button onClick={updateArrFirst}>add last</button>
    <button onClick={updateArrLast}>add first</button>
    </>
  );
}

export default App;
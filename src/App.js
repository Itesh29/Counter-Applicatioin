import React, { useState }  from "react";
import './App.css';


const App = () => {

  const [count,setCount] = useState(0)


  return(
    <div className="heading">
      <div className="logo">
      <h1> Counter Application </h1> 
      </div>
      <div className="main-div">
      <div className="count">
        <h1> {count} </h1>
      </div>
      <div className="updation">
        <button onClick={() => setCount(count+1)}><b> Increment </b> </button>
        <button onClick={() => setCount(count-1)}>  <b>  Decrement </b>  </button>
        <button onClick={() => setCount(0)}>  <b>  Reset </b>  </button>
      </div>
    </div>
    </div>
  )
}


export default App;
import React, { useState } from "react";
import "./main.css";
function Main() {
 
  const [count, setCount] = useState("");
  console.log(count);
const handleChange = (e) => {
  console.log(e.target.value);
}
const handleClick = (e) => {
e.preventDefault()
setCount(count + e.target.innerText)
}
const delClick = ()=> {
  setCount("")
}

const calculateClick = () => {
  setCount(eval(count))
}
  return (
    <div className="main">
      <div className="screen">
      <input type="text" value={count} onChange={handleChange}/>
      </div>
      <div className="counts">
      <div >
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>-</button>
        </div>
        <div >
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        
        <button onClick={handleClick}>+</button>
        </div>
        <div >
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>*</button>
       
        </div>
        <div >
        
        <button onClick={delClick}>C</button>
        <button onClick={handleClick}>0</button>
        <button onClick={calculateClick}>=</button>
        <button onClick={handleClick}>/</button>
        </div>
      </div>
    </div>
  );
}

export default Main;

import {useState} from 'react';
import React from 'react';
import './App.css';

function App()
{
  return <div className='App'>
    <h1>Higher Order Components</h1>
    <HOC Component={Count}/>
  </div>
}

function HOC(props)
{
  return <h2>
      <props.Component/>
      </h2>
}

function Count()
{
  const [value,setValue] = useState(0)
  return<div>
      <h3>Count {value}</h3>
      <button onClick={()=>setValue(value + 1)}>Update</button>    
  </div>
}

export default App;
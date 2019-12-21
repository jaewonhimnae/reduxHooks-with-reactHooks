import React from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {
  incrementNumber,
} from "./_actions/number";

function App() {
  const dispatch = useDispatch();
  const number = useSelector(state => state.number);

  const handleClick = () => {
    dispatch(incrementNumber((number && number.clickedNumber) || 0))
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', fontSize: '2rem' }}>
      {number.clickedNumber || 0}<br /><br />
      <button onClick={handleClick}>
        Click Me!
        </button>
    </div>
  );
}

export default App;

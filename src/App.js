import logo from './logo.svg';
import './App.css';
import Vector from "./images/Vector.png"
import { useState } from 'react';
import Card from './components/card/card';

function App() {
  const [click,setClick]=useState(false);
  return (
  <>
  <h1>Click on Share button</h1>
   <div>
    <div className='main-Container' onClick={()=>{ setClick(!click)}}>
      <p>Share</p>
     <img src={Vector} alt="vector" />
    </div>
    <div className='popup'>
{
  (click)? <Card/>:""
}
    </div>

   </div>
  </>
  );
}

export default App;

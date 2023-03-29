import './App.css';
import Navbar from './Component/Navbar';
import Api from './api/Api';
import Useeffect from './useeffect/Useeffect';
import Lifecycle from './lifecycle/Lifecycle';
//import React, { useState } from 'react';


function App() { 

  return (
    <div className="App">
        <Navbar />
        {/* <Hooks/> */}
        {/* <Useeffect /> */}
        <Lifecycle />       
       
    </div>
  );
}

export default App;

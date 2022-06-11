import React from 'react'
import Landing from './Components/Landing'
import Settings from './Components/Settings';
import {
 
  Routes,
  Route,
} from "react-router-dom";

import 'antd/dist/antd.css'; 
import './App.css';

import 'antd/dist/antd.css';
import Registration from './Components/Registration'

function App() {
  return (
    <div className="App">
     <Settings/>
      {/* <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/registration" element={<Registration/>} />
    </Routes> */}
    </div>
  );
}

export default App;

import React from 'react'
import Landing from './Components/Landing'
import Settings from './Components/Settings';
import {
 
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

// import SignIn from './components/SignIn/SignIn';
import 'antd/dist/antd.css';

import 'antd/dist/antd.css'; 
import './App.css';

import 'antd/dist/antd.css';
import Registration from './Components/Registration'
import './App.css';
import CommunitiesPage from './Components/Posts/Communities/CommunitiesPage';
import Posts from './Components/Posts/Posts';
import ButtonReg from './Components/Landing/ButtonReg';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/registration" element={<Registration/>} />
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/communities' element={<CommunitiesPage/>}/>
    </Routes>
    
    </div>
  );
}

export default App;

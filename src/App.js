import React from 'react'
import Landing from './Components/Landing'
import Settings from './Components/Settings';
import SignIn from './Components/SignIn/SignIn';
import SendingCOde from './Components/SendingCode/SendingCode'
import Registration from './Components/Registration/Registration'
import CommunitiesPage from './Components/Posts/Communities/CommunitiesPage';
import Posts from './Components/Posts/Posts';
import { Routes,Route} from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/registration" element={<Registration/>} />
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/communities' element={<CommunitiesPage/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/setting' element={<Settings/>}/>
    </Routes>
    
     
        
      
    </div>
  );
}

export default App;

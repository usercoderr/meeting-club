import { Route, Routes } from 'react-router-dom';
import './App.css';
import CommunitiesPage from './Components/Posts/Communities/CommunitiesPage';
import Posts from './Components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Posts/>}/>
        <Route path='/communities' element={<CommunitiesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

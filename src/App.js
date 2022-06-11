import './App.css';
import Registration from './components/Registration/Registration';
import SignIn from './components/SignIn/SignIn';
import SendingCode from './components/SendingCode/SendingCode'
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
     
        {/* <Registration/> */}
        {/* <SignIn/> */}
        <SendingCode/>
      
    </div>
  );
}

export default App;

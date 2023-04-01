import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Mainpage from './Mainpage';
import Login from './Login';
import Home from './Home';
import Register from './Register';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element= {<Mainpage/>} />
        <Route path='/login' element= {<Login/>} />
        <Route path='/home' element= {<Home/>} />
        <Route path='/signup' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;

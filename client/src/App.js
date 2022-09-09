import './App.css';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Timeline } from './pages/timeline/Timeline';

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            {/* Registration Page */}
            <Route path='/register' caseSensitive='false' element={<Register />}/>

            {/* Login Page */}
            <Route path='/login' caseSensitive='false' element={<Login />}/>

            {/* Timeline/Homepage */}
            <Route path='/' exact caseSensitive='false' element={<Timeline />}/>

            {/* Profile Page */}
            {/* Messenger */}

          </Routes>
        
        </div>
    </Router>
    
  );
}

export default App;

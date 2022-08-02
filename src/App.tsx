import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { Users } from './Users';


function App() {
  return (
    <Router>
      <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/about' >About</Link></li>
        <li><Link to='/users' >Users</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
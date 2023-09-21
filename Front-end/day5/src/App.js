import React from 'react';
import './App.css'; // You can import your global CSS styles here if needed
import Login from './Login'; // Import the LoginForm component
import Signup from './Sign';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Page1 from './Page1';

import EntrySheet from './EntrySheet';
import ProjectManage from './ProjectManage'
import About from './About';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element ={<Login/>}></Route>
        <Route path="/Signup" element ={<Signup/>}></Route>
        <Route path="/empty" element={<Page1/>}></Route>
        
        <Route path="/esheet" element={<EntrySheet />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectm" element={<ProjectManage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

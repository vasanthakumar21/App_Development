import React from 'react';
import { Outlet, Link } from 'react-router-dom';
 import image1 from './pic3 (1).png';
import image from './pic2.png';
import './Welcome.css';

function Welcome() {
    return (
        <>
        <div id="App">
          <header id="App-header">
          <div id="move-top">
          <div id="right-corner">
          <Link to="/login">
          <span id="login-span"> </span>
          </Link>
          <Link to="/register">
          <span id="signup-span"> </span>
          </Link>
          </div>
          </div>
            <nav id="navbar">
              <div id="nav-container">
                <Link to="/" id="logo">
                  <img alt="logo" src={image} style={{ width: '50px' }} />
                  <span id="logo-name">TaskMinder</span>
                </Link>
              </div>
            </nav>
            <div id="content">
              <h1 id="title11">Time Management System</h1>
            </div>
          </header>
          <div id="page">
            <div id="left">
              <img src={image} style={{width: '400px'}} alt="image" id="moving-image" />
            </div>
            <div id="right">
              <h2 style={{fontSize: "30px"}}>Welcome to Time Management</h2>
              <p id="text-para-1">
              A time management system app is a powerful tool designed to help individuals and organizations make the most of their valuable time. It provides users with the ability to organize, prioritize, and track their tasks and activities efficiently.  
              </p>
            </div>
          </div>
          <Outlet />
         <Link to="/login">
         <button id="btn-start">start</button>
         </Link>
        </div>
        <div id="empty-space"></div>
        <div id="second-para">
         <h1 id="heading-space">
            Build relationships at scale with Time management tools.
         </h1>
         <p id="para-text-2">These apps often come equipped with features such as task scheduling, to-do lists, calendar integration, and reminders. Users can set goals, allocate time to specific tasks, and receive notifications to stay on track. 
        
         </p>
         </div>
         <div id="App-2">
          <div id="page">
            <div id="left">
              <img id="image-webp" src={image1} style={{width: '400px'}} alt="image" />
            </div>
            <div id="right">
              <h2></h2>
              <p id="text-para-1">
              With the ability to analyze how time is spent, these apps enable users to identify areas for improvement and optimize their daily routines. Ultimately, a time management system app empowers users to enhance their productivity, reduce stress, and achieve a better work-life balance by making effective use of their time. <Link to="/contacts" id="home-link"></Link>.
              </p>
            </div>
          </div>
          <Outlet />
        </div>
        <div id="App-2">
          <div id="page">
            <div id="right">
              <h2 style={{marginLeft:"50px"}}>Welcome to Management</h2>
              <p id="text-para-1" style={{marginLeft:"50px"}}>
              Welcome to the Contact Management System
              This is the home page of the contact management system.
              Here, you can manage your contacts and keep track of important information.
              Get started by navigating to the <Link to="/contact" id="home-link">Contacts page</Link>.
              </p>
            </div>
            <div id="left">
              <img id="image-webp" src={image} style={{width: '400px'}} alt="image" />
            </div>
          </div>
          <Outlet />
        </div>
        <div id="empty-space" style={{height: "50px"}}></div>
        <div id="center-qn">
        <div id="number-63">
        <p id="number-center">Have questions? Give us a call and we'll walk you through it.<Link>+919360415173</Link></p>
        
        </div>
        </div>
        </>
        
  );
}

export default Welcome;
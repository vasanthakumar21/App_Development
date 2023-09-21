import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import InfoIcon from '@mui/icons-material/Info';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonIcon from '@mui/icons-material/Person';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="dashboard">
      <nav className="navbar">
        <ul>
          <Link to="/about">
            <li className='navbar-item2'>
              <InfoIcon className='icon'/>
              About
            </li>
          </Link>
          <li className='navbar-item3'>
            <SupportAgentIcon className='icon' />
            Services
          </li>
          <li className='navbar-item4'>
            <ContactsIcon className='icon'/>
            Contact
          </li>
          <li>
            
          {user && (
          <div className='welcome-message'>

            <p className='navbar-item4'>
            <PersonIcon className='icon'/>
            {user.myname}</p>
          </div>
        )}
        </li>
        </ul>
        
      </nav>
      <nav className="sidebar">
        <ul>
          <li className='name1'>Dashboard</li>
          <Link to="/esheet">
            <li className='name2'>Time Entry Sheet</li>
          </Link>
          <Link to="/projectm">
            <li className='name3'>Project Management </li>
          </Link>
          <Link to="/Login">
            <li className='name4'>Log Out</li>
          </Link>
        </ul>
      </nav>
      <main className="main-content">
        {/* Your dashboard content goes here */}
      </main>
    </div>
  );
};

export default Dashboard;

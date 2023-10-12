import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as hi from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Task',
    path: '/home',
    icon: <FaIcons.FaTasks />,
    cName: 'nav-text'
  },
  {
    title: 'Attendance',
    path: '/attend',
    icon: <hi.BsFillClockFill />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/pro',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path: '/fee',
    icon: <FaIcons.FaDashcube />,
    cName: 'nav-text'
  },
  {
    title: 'Calender',
    path: '/cal',
    icon: <FaIcons.FaCalendarCheck />,
    cName: 'nav-text'
  },

  {
    title: 'Forum',
    path: '/chat',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/cont',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Feedback',
    path: '/backback',
    icon: <MdIcons.MdFeedback/>,
    cName: 'nav-text'
  }
];
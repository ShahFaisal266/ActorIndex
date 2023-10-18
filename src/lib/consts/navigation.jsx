import { HiOutlineViewGrid } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa';
import React from 'react';
import { BsListUl, BsCardChecklist, BsFilePost, BsBriefcase, BsClock, BsPeople, BsChatDots, BsStar, BsFilm, BsBook, BsCalendar } from 'react-icons/bs';
import { FaRegFile, FaBullhorn, FaRegThumbsUp } from 'react-icons/fa';
import { IoMdNotificationsOutline, IoMdApps } from 'react-icons/io';
export const navigationItems = [
  {
    key: 'my-accounts',
    label: 'My Account',
    path: '/profile',
    icon: <FaUser />,
  },  
  {
      key: 'my-projects',
      label: 'My Projects',
      path: '/setting',
      icon: <BsListUl />,
    },
    {
      key: 'my-adverts',
      label: 'My Adverts',
      path: '/my-adverts',
      icon: <FaRegFile />,
    },
    {
      key: 'post-a-project',
      label: 'Post a Project',
      path: '/post-a-project',
      icon: <BsFilePost />,
    },
    {
      key: 'my-jobs',
      label: 'My Jobs',
      path: '/my-jobs',
      icon: <BsBriefcase />,
    },
    {
      key: 'post-a-job',
      label: 'Post a Job',
      path: '/post-a-job',
      icon: <BsCardChecklist />,
    },
    {
      key: 'applicants',
      label: 'Applicants',
      path: '/applicants',
      icon: <BsPeople />,
    },
    {
      key: 'interviews',
      label: 'Interviews',
      path: '/interviews',
      icon: <BsChatDots />,
    },
    {
      key: 'shortlisted',
      label: 'Shortlisted',
      path: '/shortlisted',
      icon: <BsStar />,
    },
    {
      key: 'my-videos',
      label: 'My Videos',
      path: '/my-videos',
      icon: <BsFilm />,
    },
    {
      key: 'my-reviews',
      label: 'My Reviews',
      path: '/my-reviews',
      icon: <BsBook />,
    },
    {
      key: 'project',
      label: 'Project',
      path: '/project',
      icon: <BsCardChecklist />,
    },
    {
      key: 'my-watchlist',
      label: 'My Watchlist',
      path: '/my-watchlist',
      icon: <BsStar />,
    },
    {
      key: 'events',
      label: 'Events',
      path: '/events',
      icon: <BsCalendar />,
    },
    // Add more menu items as needed
  
];    
    
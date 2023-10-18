import React, { useState,useEffect } from 'react';
import classNames from 'classnames';
import './sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import { FcBullish } from 'react-icons/fc';
import { FiArrowRight,FiArrowLeft  } from 'react-icons/fi';
import { navigationItems } from '../../lib/consts/navigation';

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function Sidebar() {
  const [labelsVisible, setLabelsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  const toggleLabels = () => {
    setLabelsVisible(!labelsVisible);
	
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-neutral-900 w-auto p-3 flex flex-col gap" style={{backgroundColor:'#0A163C'}}>
      <div className="flex items-center gap-2 px-1 py-3">
        <Link to='/' >
        <FcBullish fontSize={40} />
        </Link>
        {labelsVisible && (
          <span className="text-neutral-200 text-lg">
            Actors<span style={{ color: 'yellow' }}>Index</span>
          </span>
		  
        )}
       
		<button className="text-white" onClick={toggleLabels}>
        {labelsVisible ? <FiArrowRight/> :<FiArrowLeft/>  }
      </button>
      
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5 text-white">
        {navigationItems.map((link) => (
          <SidebarLink key={link.key} link={link} labelsVisible={labelsVisible} />
        ))}
      </div>
      
    </div>
  );
}

function SidebarLink({ link, labelsVisible }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',
        linkClass
      )}
    >
      <div className="flex items-center">
        <span className="text-xl text-white mx-2">{link.icon}</span>
        {labelsVisible && <span className="label-md text-white">{link.label}</span>}
      </div>
    </Link>
  );
}

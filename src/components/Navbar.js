import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import logo from '../img/ssn1.png'
import logo1 from '../img/ieeel.png'



function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
 const handleHover=(event)=>{
    console.log(event);

    event.target.classList.toggle("hover1");
}

  return (
    <>
      <IconContext.Provider value={{ color: '#f79303' }}>
        <div className='navbar' >
          <Link to='#' className='menu-bars'>
            <i className="fas fa-bars fa-1x barr" onClick={showSidebar}></i>
          </Link>
        <div className="logo">
            <a href="https://www.ssn.edu.in/"><img   src={logo} alt="ssn-logo" id="ssn-logo" width="75px"/></a>
            {/* &kdjsj
            <a href="https://www.ieee.org/"><img  src={logo1} alt="ieee-logo" id="ieee-logo" width="70px"/></a> */}
        </div>
        <ul className="ul-list">
            <li><a href="/#beg" className="nav-item-" >Home</a></li>
            <li><a href="/#about" className="nav-item-" >About</a></li>
            <li><a href="/#track" className="nav-item-">Tracks</a></li>
            <li><a href="/#timeline" className="nav-item-">Timeline</a></li>
            <li><a href="/#sponsor" className="nav-item-">Sponsors</a></li>
            <li><a href="/#faq" className="nav-item-">FAQs</a></li>
            {/* <Link to="/team" className="nav-item-">Teams</Link> */}
            {/* <li><a href="/#faq" style={style}>FAQs</a></li> */}
            
            <li><a href="#contact" className="nav-item-">ContactUs</a></li>

        </ul>

             
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

import React,{ useState } from 'react';
import Sidebar from'./MainInfoNav';
import "../../css/sidebar.css";


const NavContents = (props) => {
  return (
    <div className="container">
      <nav>
    
      <Sidebar width={320}>
        <li>안녕</li>
        <li>하세요</li>
      </Sidebar>
      </nav>
    </div>
    )
};

export default NavContents;
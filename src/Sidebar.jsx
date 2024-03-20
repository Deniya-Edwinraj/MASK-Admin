import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs';
import { Link } from 'react-router-dom';


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <Link to="http://localhost:3000/" style={{ textDecoration: 'none', color:'black' }} className='side-link'>
                <BsCart3  className='icon_header'/> MASK
                </Link>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
            <Link to="/" style={{ textDecoration: 'none', color:'black' }} className='side-link'>
             <BsGrid1X2Fill className='icon'/> Dashboard
            </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/products'  style={{ textDecoration: 'none', color:'black' }} className='side-link'>
                    <BsFillArchiveFill className='icon'/> Products
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/category'  style={{ textDecoration: 'none', color:'black' }} className='side-link'>
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/customers'  style={{ textDecoration: 'none', color:'black' }} className='side-link'>
                    <BsPeopleFill className='icon'/> Customers
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/vendors'  style={{ textDecoration: 'none', color:'black' }} className='side-link'>
                    <BsPeopleFill className='icon'/> Vendors
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/orders' style={{ textDecoration: 'none', color:'black' }} className='side-link'>
                    <BsListCheck className='icon'/> Orders
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/customizes' style={{ textDecoration: 'none', color:'black' }} className='side-link'>
                <BsMenuButtonWideFill className='icon'/> Customize
                </Link>
            </li>
            <li className='sidebar-list-item'>
               <Link to='/bookings' style={{ textDecoration: 'none', color:'black' }} className='side-link'>   
                    <BsListCheck className='icon'/> Bookings
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/messages" style={{ textDecoration: 'none', color:'black' }} className='side-link'>
                <BsMenuButtonWideFill className='icon'/> Contacts
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;
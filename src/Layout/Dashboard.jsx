import React from 'react';
import { FaCalendarAlt, FaCartArrowDown, FaCcAmazonPay, FaCommentAlt, FaHome, FaUsers, FaUtensils } from 'react-icons/fa';
import { AiFillAccountBook, AiFillShopping, AiTwotoneContacts  } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import {  TfiMenuAlt } from "react-icons/tfi";
import {   NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {

  // const isAdmin = true;
  const [isAdmin] = useAdmin();
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex w-5/6 mx-auto flex-col items-center justify-center ">
    <Outlet></Outlet>
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary bg-[#D1A054] drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2 " className="drawer-overlay  "></label> 
    <ul className="menu p-4 w-80 min-h-full  text-white bg-[#D1A054]">
      {/* Sidebar content here */}
      {
        isAdmin ? <><li><NavLink to="/dashboard/adminhome"> <FaHome/> Admin  Home</NavLink></li>
        <li><NavLink to="/dashboard/additem"> <FaUtensils/> Add Item</NavLink></li> 
        <li><NavLink to="/dashboard/manageitems"> <TfiMenuAlt/> Manage Items</NavLink></li>
        <li><NavLink to="/"> <AiFillAccountBook/> Manage Bookings</NavLink></li> 
        <li><NavLink to="/dashboard/allusers"> <FaUsers/> All Users</NavLink></li> 
        </>
        :
        <><li><NavLink to="/dashboard/userhome"> <FaHome/> User Home</NavLink></li>
        <li><NavLink to="/dashboard/mycart"> <FaCartArrowDown/> my cart</NavLink></li> 
        <li><NavLink to="/"> <FaCcAmazonPay/> payment history</NavLink></li>
        <li><NavLink to="/"> <FaCalendarAlt/> reservation</NavLink></li>
        <li><NavLink to="/"> <FaCommentAlt/> add review</NavLink></li> 
        <li><NavLink to="/"> <AiFillAccountBook/> my booking</NavLink></li> </>
      }
      
      <div className="divider "></div>
      <li><NavLink to="/"> <FaHome/> Home</NavLink></li>
      <li><NavLink to="/menu"> <FiMenu/> Menu</NavLink></li> 
      <li><NavLink to="/order/salad"> <AiFillShopping/> Shop</NavLink></li>
      <li><NavLink to="/"> <AiTwotoneContacts/> Contact</NavLink></li> 

    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;
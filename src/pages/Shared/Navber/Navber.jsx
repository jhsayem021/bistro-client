
import { Link } from "react-router-dom";

import useCart from "../../../Hooks/useCart";
import { FaCartArrowDown } from "@react-icons/all-files/fa/FaCartArrowDown";
import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";


const Navber = () => {
  const [isAdmin] = useAdmin();
  const { user, logOut } = useAuth();
  const [cart, refetch] = useCart();


  const navElements = <>

    <li><Link to="/" >Home</Link></li>
    <li><Link to="/menu" >Menu</Link></li>
    <li><Link to="/order/salad" >Order Food</Link></li>
    {
      isAdmin ? <li><Link to="/dashboard/adminhome" >Dashboard</Link></li> :
      <li><Link to="/dashboard/userhome" >Dashboard</Link></li>
    }

  </>

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white sm:text-black">
              {navElements}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Food Mania </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            {navElements}
          </ul>
        </div>
        <div className="navbar-end">

          {
            user ? <><div className="flex justify-items-center items-center  "><div className="flex justify-items-between">
              <button className="btn">
              <FaCartArrowDown  />  
                <Link to="/dashboard/mycart"><div className="badge badge-primary"><h5 className="" >{cart?.length}</h5></div></Link>
              </button>
              <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button>
            </div>
              <div className="group">
                <div className="avatar online  ">
                  <div className="w-12 bg-slate-200 rounded-full">
                    <img src={user.photoURL} />
                  </div>

                </div>
                <div className="text-center hidden group-hover:block absolute right-0 stats shadow">
                  

                    <div className="stat">
                      <div className="stat-title font-bold text-primary">{user?.displayName}</div>
                      <div className="stat-title text-black">{user?.email}</div>
                    </div>

                 
                </div>
              </div>
            </div></> : <>
              <Link className="mr-4" to="/login" >Login</Link>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navber;
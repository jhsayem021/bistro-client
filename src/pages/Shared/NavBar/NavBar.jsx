import { useContext } from "react";
import { FaCartArrowDown, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link className="hover:text-white hover:bg-[#D1A054]" to="/">Home</Link></li>
        <li><Link className="hover:text-white hover:bg-[#D1A054]" to="/menu">Our Menu</Link></li>
        <li><Link className="hover:text-white hover:bg-[#D1A054]" to="/order/salad">Order Food</Link></li>
        {
           user && <>
           {
             isAdmin ? <li><Link className="hover:text-white hover:bg-[#D1A054]" to="/dashboard/adminhome">Dashboard</Link></li> : 
             <li><Link className="hover:text-white hover:bg-[#D1A054]" to="/dashboard/userhome">Dashboard</Link></li>
           }
            </>
        }

        {
          user && <li>  <button onClick={handleLogOut} className="btn  btn-ghost text-[14px] md:hidden inline">Log Out</button></li>
        }
        
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-80 max-w-screen-xl bg-[#D1A054] text-white py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#D1A054] bg-opacity-50 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Food Mania</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                {
            user ? <><div className="flex justify-items-center items-center "><div className="flex justify-items-between">
              <div className="flex items-center mr-3 ">
              
                <Link to="/dashboard/mycart"><div className="badge border-0 bg-amber-500 text-white px-4 py-5"><FaCartArrowDown/>=<h5 className=" bg-primary px-2 py-1 rounded-2xl ms-2" >+{cart?.length || 0}</h5></div></Link>
              </div>
              <button onClick={handleLogOut} className="btn btn-active btn-ghost md:inline hidden">Log Out</button>
            </div>
              <div className="group">
                <div className="avatar online  ms-3">
                  <div className="w-12 bg-slate-200 rounded-full">
                    <img src={user.photoURL} />
                  </div>

                </div>
                <div className="text-center hidden group-hover:block absolute right-0 stats shadow">
                  

                    <div className="stat bg-white">
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
        </>
    );
};

export default NavBar;
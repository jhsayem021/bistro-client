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
      
        
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
              <button className="btn">
              <FaCartArrowDown  />  
                <Link to="/dashboard/mycart"><div className="badge badge-primary"><h5 className="" >+{cart?.length || 0}</h5></div></Link>
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
        </>
    );
};

export default NavBar;
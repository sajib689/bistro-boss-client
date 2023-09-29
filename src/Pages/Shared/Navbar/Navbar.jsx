import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then(() => {});
  };
  const nvOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>Contact Us</Link>
      </li>
      <li>
        <Link>Dashboard</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order">Our Shop</Link>
      </li>
      
      {user ? (
        <li>
          <Link onClick={handleSignOut}>Sign Out</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Sign In</Link>
        </li>
      )}
      <li>
        <Link>
          <button className="">
            <FaShoppingCart className=""></FaShoppingCart>
            <div className="badge badge-secondary">+0</div>
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="max-w-screen-xl mx-auto navbar fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="uppercase menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nvOptions}
            </ul>
          </div>
          <Link className="uppercase text-[28px] font-[900] text-[#FFF]">
            Bistro Boss
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase">{nvOptions}</ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">Button</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

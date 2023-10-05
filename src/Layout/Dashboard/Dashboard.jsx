import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaBookMedical,
  FaCommentDots,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";

// ToDO
// const isAdmin = true;

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const {user} = useContext(AuthContext)
  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="uppercase p-4 ">
            <h1 className="font-bold text-xl">Bistro Boss</h1>
            <p className="font-[600]">Restaurant</p>
            <p>Email: {user.email}</p>
          </div>
          <ul className="menu p-4 w-80 min-h-full uppercase">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink>
                    <FaHome to="/dashboard"></FaHome>Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaUtensils></FaUtensils>Add items
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaWallet></FaWallet>manage items
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaShoppingCart></FaShoppingCart>Manage orders
                  </NavLink>
                </li>
                <li>
                  <NavLink to="allusers">
                    <FaUsers></FaUsers>all users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink>
                    <FaHome></FaHome>User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaCalendarAlt></FaCalendarAlt>Reservations
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaWallet></FaWallet>Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart>My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaCommentDots></FaCommentDots>Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaBookMedical></FaBookMedical>my booking
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">Our Menu</NavLink>
            </li>
            <li>
              <NavLink to="/order">Order Food</NavLink>
            </li>
            <li>
              <NavLink></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

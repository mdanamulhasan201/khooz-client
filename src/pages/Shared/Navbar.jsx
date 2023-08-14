
import { Link, NavLink } from "react-router-dom";




const Navbar = () => {

  return (

    <div>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden dropdown-btn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink to='/' exact activeClassName="active-link">Home</NavLink></li>
              <li><NavLink to='/about' activeClassName="active-link">All Provider</NavLink></li>
              <li><NavLink to='/contact' activeClassName="active-link">Products</NavLink></li>
              <li><NavLink to='/contact' activeClassName="active-link">Contact</NavLink></li>
            </ul>
          </div>
          <Link className=" normal-case text-xl">Khooz</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to='/' exact activeClassName="active-link">Home</NavLink></li>
            <li><NavLink to='/about' activeClassName="active-link">All Provider</NavLink></li>
            <li><NavLink to='/contact' activeClassName="active-link">Products</NavLink></li>
            <li><NavLink to='/contact' activeClassName="active-link">Contact</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="Profile" />
              </div>
            </label>
            <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
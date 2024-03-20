import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  

  return (
    <div>
      <h3 className="text-center text-green-600 text-2xl font-semibold"> Meal Factory </h3>
      <div className="nav font-bold active:text-red flex gap-5 justify-center py-3 text-yellow-300">
    <NavLink to="/"> Home </NavLink>
    <NavLink to="/Meals"> Meals </NavLink>
    <NavLink to="/AboutUs"> About Us </NavLink>
    <NavLink to="/Contact"> Contact </NavLink>
  </div>

  <div>
    <h3>here we will put more data for show</h3>
  </div>
    </div>
  );
};

export default Header;

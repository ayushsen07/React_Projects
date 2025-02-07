import React from "react";
import { NavLink } from "react-router";
function Navbar() {
  return (
    <div>
      <ul className="text-xl">
        <li>
          <NavLink to="/"  className={({isActive})=> isActive ?`bg-green-400` :""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/Contact"  className=  {({isActive})=> isActive ?`bg-red-400` :""}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about"  className={({isActive})=>  isActive ?`bg-white` :""}>About</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

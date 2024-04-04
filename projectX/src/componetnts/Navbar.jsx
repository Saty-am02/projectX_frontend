import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <header className='header font-saveur text-base sm:text-sm ' >
      <nav className="flex text-4xl font-medium">
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-secondary-400' : ' text-secondary-lightenglishblue'}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
          Home
        </NavLink>
      </nav>

      <nav className="flex text-4xl font-medium">
        <NavLink to="/evaluate" className={({ isActive }) => isActive ? 'text-secondary-400' : ' text-secondary-lightenglishblue'}
>
          Evaluate
        </NavLink>
      </nav>
      <nav className="flex text-4xl font-medium">
        <NavLink to="/results" className={({ isActive }) => isActive ? 'text-secondary-400' : ' text-secondary-lightenglishblue'}>
          Results
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
const EvalutionNavbar = () => {
  return (
    <section className='Evaluateheader font-saveur sm:text-sm '>
      <nav className="flex text-3xl font-medium">
        <NavLink to="script" className={({ isActive }) => isActive ? 'text-secondary-400' : ' text-secondary-lightenglishblue'}>
        Evaluation Scheme
        </NavLink>
      </nav>

      <nav className="flex text-3xl font-medium">
        <NavLink to="question" className={({ isActive }) => isActive ? 'text-secondary-400' : ' text-secondary-lightenglishblue'}>
        Question
        </NavLink>
      </nav>
      <nav className="flex text-3xl font-medium">
        <NavLink to="exam" className={({ isActive }) => isActive ? 'text-secondary-400' : ' text-secondary-lightenglishblue'}>
        Answer Script
        </NavLink>
      </nav>
    </section>
  )
}

export default EvalutionNavbar

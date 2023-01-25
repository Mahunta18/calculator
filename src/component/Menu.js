import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Menu(props) {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-secondary'>
        <div className='container'>
            <NavLink to={`/`} className='navbar-brand'>React Calculator</NavLink>

            |<button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#menu'>
                <span className='nvbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='menu'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink to={`/home`} className='nav-link'>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={`/bmi`} className='nav-link'>BMI Calculator</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={`/math`} className='nav-link'>Math Calculator</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={`/emi`} className='nav-link'>EMI Calculator</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={`/age`} className='nav-link'>Age Calculator</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}


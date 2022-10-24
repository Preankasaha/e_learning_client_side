import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mx-4'>
            <div className="navbar bg-neutral text-accent rounded text-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/courses'>Courses</Link>
                            <Link to='/faq'>FAQ</Link>
                            <Link to='/blog'>Blog</Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl">e-Learning</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Link className='mr-4' to='/courses'>Courses</Link>
                        <Link className='mr-4' to='/faq'>FAQ</Link>
                        <Link to='/blog'>Blog</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div><Link className="btn btn-outline btn-accent text-xl">Sign In</Link></div>
                </div>
                <div className='mx-2'>
                    <Link className="btn btn-outline btn-accent text-xl">Registration</Link>
                </div>

            </div>
        </div>
    );
};

export default Header;
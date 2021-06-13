import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-3 mx-auto text-gray-100 capitalize dark:text-gray-300">
            <Link  to="/" className="border-transparent hover:text-gray-100 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >home</Link>
    
            <Link to="/addMovie"   className="text-gray-100 dark:text-gray-200  border-blue-500 mx-1.5 sm:mx-6"
            >Add Movie</Link>
    <Link to="/editMovie"   className="text-gray-100 dark:text-gray-200  border-blue-500 mx-1.5 sm:mx-6"
            >Edit List</Link>
           
        </div>
    </nav>
    )
}

export default Navbar

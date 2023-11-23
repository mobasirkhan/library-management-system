import React from 'react'
import './admin.css'
import { Link } from 'react-router-dom'


const AdminSidebar = () => {
  return (
    <>
    <div className="ASMainSection">
        <div className="AsHeaderSection">
            Admin
        </div>
        <div className="AsMainSection">
            <ul type="none">
              <Link to={'addbooks'}><li>Add Books</li></Link>   
              <Link to={'viewbooks'}><li>View Books</li></Link>
              <Link to={'viewuser'}><li>View Users</li></Link>  
            </ul>
        </div>
        <div className="AsFooterSection">
            <button>Logout</button>
        </div>
    </div>
    </>
  )
}

export default AdminSidebar

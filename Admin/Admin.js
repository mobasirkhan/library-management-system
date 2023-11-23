import React from 'react'
import AdminSidebar from './AdminSidebar'
import './admin.css'
import { Outlet } from 'react-router-dom'
const Admin = () => {
  return (
    <>
    <div className="Admin_section">
    <div className="AdminSidebarSection">
        <AdminSidebar/>
    </div>
    <div className="AdminMainSection">
          <Outlet/>
    </div>
    </div>
    
    </>
  )
}

export default Admin

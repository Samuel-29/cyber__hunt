import React from 'react'
import {Link} from 'react-router-dom'

export const ProtAdminDash = () => {
  return (
    <div className="admin-dashboard">
      <div className="left-div">
        <div className="admin-card">
          <h6>Admin Details</h6>
          <p>Insert your admin details here.</p>
        </div>
      </div>
      <div className="right-div">
        <div className="card">
          <Link to='/admin/allusers'><a><h6>Get All Users</h6></a></Link>
        </div>
        <div className="card">
          <Link to='/admin/testtaken'><a><h6>Get All Test Taken Users</h6></a></Link>
        </div>
      </div>
    </div>
  );
}


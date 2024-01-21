// import React from 'react'

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../authContext/adminAuth"

function Dashboard() {
    const data = useAuth()
    console.log(data.user)
    const dt  = data.user[0];
    console.log(dt)
    const navigate = useNavigate()
     
    const handleLogout =() =>{
        data.logout();
        navigate("/admin")
    }
  return (
    <div>
      Dashboard
      Email : {dt.adminEmail}
      Id : {dt.id}
      FN : {dt.adminFN}


      <br/>
      <button onClick={handleLogout}>Log me out from world</button>
    </div>
  )
}

export default Dashboard

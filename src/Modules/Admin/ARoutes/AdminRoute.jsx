import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AHome from '../AComponents/AHome'
import SideBar from '../AComponents/SideBar'
export default function AdminRoute() {
  return (
    <div>
      <SideBar/>
      <Routes>
        <Route path='/Ahome' element={<AHome/>}/>
      </Routes>
    </div>
  )
}

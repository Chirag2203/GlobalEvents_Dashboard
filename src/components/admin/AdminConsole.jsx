import React from 'react'
import { adminSidebarData } from '../shared/data/sidebar'
import Sidebar from '../shared/Sidebar'

const AdminConsole = ({children}) => {
  return (
    <div className="flex w-full justify-between">
      <Sidebar data={adminSidebarData} />
      <div className="console-side-cont">{children}</div>
    </div>
  )
}

export default AdminConsole

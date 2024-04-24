import React from 'react'
import Sidebar from '../shared/Sidebar'
import { managerSidebarData } from '../shared/data/sidebar'

const ManagerConsole = ({children}) => {
  return (
    <div className="flex w-full justify-between">
      <Sidebar data={managerSidebarData} />
      <div className="console-side-cont">{children}</div>
    </div>
  )
}

export default ManagerConsole

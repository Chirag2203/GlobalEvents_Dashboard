import React from 'react'
import { BoxBg } from './shared/BoxBg'

const LoginConsole = ({children}) => {
  return (
    <div className='flex'>
        <div className="w-1/2 relative ">
          <BoxBg/>
        </div>   
        <div className="w-1/2 relative bg-slate-950">
          {children}
        </div>   
    </div>
  )
}

export default LoginConsole

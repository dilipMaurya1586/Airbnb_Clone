import React from 'react'
import { Outlet } from 'react-router'
import SettingsSidebar from './settings-sidebar'
import TravelerContextProvider from '@/lib/provider/traveler-context'

const SettingLayout = () => {
  return (
    <div className="w-full px-3 sm:px-4 md:px-4 lg:px-6 py-3 sm:py-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          {/* Sidebar - Full width on mobile, fixed width on tablet/desktop */}
          <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
            <SettingsSidebar />
          </div>

          {/* Main Content - Full width on mobile, takes remaining space on tablet/desktop */}
          <div className="w-full md:flex-1 md:min-w-0">
           <TravelerContextProvider>
                 <Outlet />
           </TravelerContextProvider>
               
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingLayout
import React from 'react'
import { getAssetPath } from '@/lib/utils';

const AuthLayout = ({children,title,description}) => {
  return (
    <div  className="w-full my-10 sm:my-20 flex items-center justify-center">
        <div className=" w-full md:max-w-md sm:mx-auto rounded-lg shadow-md p-4 sm:p-6">
            <div className="flex flex-col gap-3 justify-center items-center">
                <div className="p-3 rounded-lg shadow">
           <img
              width={100}
              height={100}
              src={getAssetPath('Color-Airbnb-Logo.jpg')}
              alt="Logo"
            />
        </div>
        <h1 className='text-xl font-semibold text-center'>{title}</h1>
          <p className='text-sm text-center'>{description}</p>
          {children}
            </div>
        </div>
    </div>
  )
}

export default AuthLayout;
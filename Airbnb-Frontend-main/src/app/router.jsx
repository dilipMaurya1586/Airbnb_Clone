import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Home from './home'
import Header from '@/components/layouts/header.layout'
import Footer from '@/components/layouts/footer.layout'
import SearchPage from './search'
import HotelDetails from './hotel-details'
import { SignInPage, SignUpPage } from './auth'
import WithSearchLayout from '@/components/layouts/with-search'
import PATH_CONFIG from './config/path.config'
import CheckoutPage from './checkout'
import { WithAuthProvider } from '@/lib/provider/auth-context-provider'
import PaymentStatus from './payments'
import SettingLayout from './settings/settings-layout'
import Profile from './settings/profile'
import BookingHistory from './settings/booking-history'
import TravlersManagement from './settings/travellers'
import RegularUserLayout from '@/components/layouts/regular-user-layout'
import { WithAdminProvider } from '@/lib/provider/admin-context-provider'
import Admin from './admin'
import Hotels from './admin/hotels'
import CreateHotel from './admin/create-hotels'
import AdminLayout from '@/components/layouts/admin.layout'
import Overview from './admin/overview'
import Bookings from './admin/bookings'
import Rooms from './admin/rooms'
import EditHotel from './admin/edit-hotel'
import CreateRoom from './admin/create-room'
import EditRoom from './admin/edit-room'
import Inventory from './admin/inventory'
import NotFound from './auth/not-found'
import Insights from './admin/Insights'



const Router = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<RegularUserLayout />}>

          <Route index element={<Home />} />

          <Route element={<WithSearchLayout />}>
            <Route path='/search' element={<SearchPage />} />
            <Route path='/hotels/:id' element={<HotelDetails />} />
          </Route>


          <Route path='/signin' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />

          <Route element={<WithAuthProvider />}>
            <Route path={PATH_CONFIG.CHECKOUT} element={<CheckoutPage />} />
            <Route path={PATH_CONFIG.PAYMENTS_STATUS} element={<PaymentStatus />} />

            <Route element={<SettingLayout />}>
              <Route path={PATH_CONFIG.SETTINGS.PROFILE} element={<Profile />} />
              <Route path={PATH_CONFIG.SETTINGS.BOOKING_HISTORY} element={<BookingHistory />} />
              <Route path={PATH_CONFIG.SETTINGS.TRAVELERS_MANAGEMENT} element={<TravlersManagement />} />

            </Route>
          </Route>
        </Route>

        <Route element={<WithAuthProvider/>}>
        <Route element={<WithAdminProvider/>}>
          <Route path={PATH_CONFIG.ADMIN.LIST_HOTELS} element={<Admin/>}>
              <Route index element={<Hotels/>}/>
              <Route path={PATH_CONFIG.ADMIN.CREATE_HOTEL} 
              element={<CreateHotel/>}/>
          </Route>
          <Route path={PATH_CONFIG.ADMIN.DASHBOARD.ROOT} element={<AdminLayout/>}>
                <Route index element={<Navigate to={PATH_CONFIG.ADMIN.DASHBOARD.OVERVIEW}/>}/>

                <Route path={PATH_CONFIG.ADMIN.DASHBOARD.OVERVIEW}
                 element={<Overview/>}/>

                <Route path={PATH_CONFIG.ADMIN.DASHBOARD.BOOKINGS}
                 element={<Bookings/>}/>

                <Route path={PATH_CONFIG.ADMIN.DASHBOARD.ROOMS.ROOT}
                 element={<Rooms/>}/>

                 <Route path={PATH_CONFIG.ADMIN.DASHBOARD.ROOMS.CREATE}
                 element={<CreateRoom/>}
                 />
                 
                 <Route path={PATH_CONFIG.ADMIN.DASHBOARD.INSIGHTS}
                 element={<Insights/>}
                 />

                 <Route path={PATH_CONFIG.ADMIN.DASHBOARD.ROOMS.EDIT_ROOM}
                 element={<EditRoom/>}
                 />

                 <Route path={PATH_CONFIG.ADMIN.DASHBOARD.ROOMS.INVENTORY}
                 element={<Inventory/>}
                 />

                 <Route path={PATH_CONFIG.ADMIN.DASHBOARD.EDIT_HOTEL}
                 element={<EditHotel/>}/>
              </Route>
        </Route>
         <Route path="*" element={<NotFound/>} />
        </Route>
       
      </Routes>
      
    </BrowserRouter>
  )
}

export default Router;

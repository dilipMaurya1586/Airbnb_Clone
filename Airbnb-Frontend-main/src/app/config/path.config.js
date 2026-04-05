const PATH_CONFIG={
    AUTH:{
        SIGN_IN:'/auth/login',
        SIGN_UP:'/auth/signup',
        LOGOUT:'/auth/logout',
    },
    USER:{
        PROFILE:'/users/profile',
        BOOKING_HISTORY:"/users/myBookings",
    },

    PROFILE: '/me/profile',
    BOOKING_HISTORY: '/me/booking-history',

   CHECKOUT:"/hotels/:id/checkout",
   PAYMENTS_STATUS:"/payments/:bookingId/status",

  SETTINGS: {
    PROFILE: '/me/profile',
    BOOKING_HISTORY: '/me/booking-history',
    TRAVELERS_MANAGEMENT: '/me/travelers',
  },
  ADMIN: {
    LIST_HOTELS: '/admin',
    CREATE_HOTEL: 'hotels/create',
    DASHBOARD: {
      ROOT: '/admin/hotels/:hotelId',
      OVERVIEW: 'overview',
      EDIT_HOTEL: 'edit',
      BOOKINGS: 'bookings',
      INSIGHTS: 'insights',
      ROOMS: {
        ROOT: 'rooms',
        INVENTORY: 'rooms/:roomId/inventory',
        EDIT_ROOM: 'rooms/:roomId/edit',
        CREATE: 'rooms/create'
      }
    }
  }

    
}
export default PATH_CONFIG;
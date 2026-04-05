import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button, buttonVariants } from '@/components/ui/button'
import Icon from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import { useAuthContext } from '@/lib/provider/auth-context-provider'
import { cn, getDefaultProfile } from '@/lib/utils'
import React from 'react'
import { NavLink } from 'react-router'
import PATH_CONFIG from '../config/path.config'
import useLogoutHandler from '../auth/hooks/use-logout'

const SettingsSidebar = () => {
  const { authenticatedUser } = useAuthContext();


  const user = {
  name: authenticatedUser?.user?.name || 
        authenticatedUser?.username || 
        authenticatedUser?.firstName || ''
}

  const { pending, logoutHandler } = useLogoutHandler();

  return (
    <>
      {/* MOBILE VIEW */}
     <aside className="md:hidden w-full px-3 sm:px-4 py-4 shadow-md rounded-lg sm:rounded-xl bg-card mb-6">
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <Avatar className="hover:cursor-crosshair size-20 sm:size-24">
              <AvatarImage
                loading="lazy"
                src={getDefaultProfile(user.name.charAt(0))}
                width={36}
                height={36}
                
              />
              <AvatarFallback>{user?.name && user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button size="icon" className="absolute w-6 h-6 p-1 rounded-full bottom-1 right-1 shadow-lg">
              <Icon icon="pen" size="12" />
            </Button>
          </div>

          <h3 className="text-base sm:text-lg font-bold truncate text-center px-2 max-w-xs">
            {user.name}
          </h3>

          <Separator className="my-2" />

          <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2 w-full">
            <NavLink
              to={PATH_CONFIG.SETTINGS.PROFILE}
              className={({ isActive }) =>
                cn(
                  buttonVariants({ variant: 'ghost', className: 'w-full justify-center gap-1 sm:gap-2 text-xs sm:text-sm' }),
                  isActive && 'bg-primary/10 text-primary pointer-events-none',
                  'hover:bg-secondary/50 transition-colors'
                )
              }
            >
              <Icon icon="user" size="16" className="sm:size-[18px]" />
              <span className="line-clamp-1">Profile</span>
            </NavLink>

            <NavLink
              to={PATH_CONFIG.SETTINGS.BOOKING_HISTORY}
              className={({ isActive }) =>
                cn(
                  buttonVariants({ variant: 'ghost', className: 'w-full justify-center gap-1 sm:gap-2 text-xs sm:text-sm' }),
                  isActive && 'bg-primary/10 text-primary pointer-events-none',
                  'hover:bg-secondary/50 transition-colors'
                )
              }
            >
              <Icon icon="bookingHistory" size="16" className="sm:size-[18px]" />
              <span className="line-clamp-1">History</span>
            </NavLink>

            <NavLink
              to={PATH_CONFIG.SETTINGS.TRAVELERS_MANAGEMENT}
              className={({ isActive }) =>
                cn(
                  buttonVariants({ variant: 'ghost', className: 'w-full justify-center gap-1 sm:gap-2 text-xs sm:text-sm' }),
                  isActive && 'bg-primary/10 text-primary pointer-events-none',
                  'hover:bg-secondary/50 transition-colors'
                )
              }
            >
              <Icon icon="travelers" size="16" className="sm:size-[18px]" />
              <span className="line-clamp-1">Co-Travelers</span>
            </NavLink>

            <Button
              disabled={pending}
              onClick={logoutHandler}
              className="w-full justify-center text-xs sm:text-sm gap-1 sm:gap-2 hover:bg-destructive/10 hover:text-destructive transition-colors"
              variant="ghost"
            >
              <Icon size="16" icon="logout" className="sm:size-[18px]" />
              <span className="line-clamp-1">Logout</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* TABLET & DESKTOP VIEW */}
      <aside className="hidden md:flex sticky w-full max-w-sm lg:max-w-xs px-4 lg:px-5 py-6 shadow-md rounded-xl top-6 basis-72 shrink-0 h-max flex-col bg-card">
        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="relative">
            <Avatar className="cursor-pointer size-24 lg:size-28 shadow-md">
              <AvatarImage
                loading="lazy"
                src={getDefaultProfile(user.name.charAt(0))}
                width={36}
                height={36}
              />
              <AvatarFallback>{user?.name && user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button size="icon" className="absolute w-7 h-7 p-1.5 rounded-full bottom-2 right-2 shadow-lg hover:scale-110 transition-transform">
              <Icon icon="pen" size="14" />
            </Button>
          </div>

          <h3 className="text-base lg:text-lg font-bold text-center px-2 line-clamp-2">
            {user.name}
          </h3>
        </div>

        <Separator className="my-2" />

        <nav className="space-y-1 w-full flex-1">
          <NavLink
            to={PATH_CONFIG.SETTINGS.PROFILE}
            className={({ isActive }) =>
              cn(
                buttonVariants({ variant: 'ghost', className: 'w-full justify-start gap-3 text-sm lg:text-base' }),
                isActive && 'bg-primary/10 text-primary pointer-events-none',
                'hover:bg-secondary/50 transition-colors'
              )
            }
          >
            <Icon icon="user" size="18" />
            <span>Profile</span>
          </NavLink>

          <NavLink
            to={PATH_CONFIG.SETTINGS.BOOKING_HISTORY}
            className={({ isActive }) =>
              cn(
                buttonVariants({ variant: 'ghost', className: 'w-full justify-start gap-3 text-sm lg:text-base' }),
                isActive && 'bg-primary/10 text-primary pointer-events-none',
                'hover:bg-secondary/50 transition-colors'
              )
            }
          >
            <Icon icon="bookingHistory" size="18" />
            <span>Booking History</span>
          </NavLink>

          <NavLink
            to={PATH_CONFIG.SETTINGS.TRAVELERS_MANAGEMENT}
            className={({ isActive }) =>
              cn(
                buttonVariants({ variant: 'ghost', className: 'w-full justify-start gap-3 text-sm lg:text-base' }),
                isActive && 'bg-primary/10 text-primary pointer-events-none',
                'hover:bg-secondary/50 transition-colors'
              )
            }
          >
            <Icon icon="travelers" size="18" />
            <span>Co-Travelers</span>
          </NavLink>
        </nav>

        <div className="mt-4 pt-4 border-t">
          <Button
            disabled={pending}
            onClick={logoutHandler}
            className="w-full justify-start gap-3 text-sm lg:text-base hover:bg-destructive/10 hover:text-destructive transition-colors"
            variant="ghost"
          >
            <Icon size="18" icon="logout" />
            <span>{pending ? 'Logging out...' : 'Log out'}</span>
          </Button>
        </div>
      </aside>
    </>
  )
}

export default SettingsSidebar
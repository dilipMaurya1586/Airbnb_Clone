import React from 'react'
import { Link, NavLink, useParams, useLocation } from 'react-router'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '../ui/sidebar';
import { ADMIN_SIDEBAR } from '@/app/config/admin.config';
import Icon from '../ui/icons';
import { cn, getAssetPath } from '@/lib/utils';

const AdminSidebar = () => {
    const { hotelId } = useParams();
    const { open, setOpen } = useSidebar();
    const location = useLocation();
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1024);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close sidebar when location changes (page navigated)
    React.useEffect(() => {
        if (isMobile && open) {
            setOpen(false);
        }
    }, [location.pathname, isMobile, open, setOpen]);

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="flex flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2 px-2 border-b h-12 sm:h-13 md:h-14">
                <Link to={'/admin'} className="flex items-center justify-center sm:justify-start">
                    <img
                        width={open ? 120 : 36}
                        height={open ? 20 : 36}
                        src={getAssetPath(
                            open ? 'Airbnb_Logo_Bélo.svg.png' : 'airbnb.png'
                        )}
                        alt="Booking.com logo"
                        className="object-contain"
                    />
                </Link>
            </SidebarHeader>

            <SidebarContent className="px-1 sm:px-2">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1 sm:gap-2">
                            {ADMIN_SIDEBAR.map(({ id, label, to, logo }) => (
                                <SidebarMenuItem key={id}>
                                    <SidebarMenuButton 
                                        className="h-9 sm:h-10 px-2"
                                        asChild
                                    >
                                        <NavLink
                                            to={to({ hotelId })}
                                            end
                                            className={({ isActive }) => cn(
                                                'flex items-center gap-1 sm:gap-2 rounded-md transition-colors',
                                                isActive && 'bg-primary text-primary-foreground'
                                            )}
                                        >
                                            <Icon 
                                                icon={logo} 
                                                size="18"
                                                className="sm:size-[20px] shrink-0"
                                            />
                                            <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                                                {label}
                                            </span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AdminSidebar
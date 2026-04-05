import { SidebarTrigger } from '@/components/ui/sidebar';
import AccountMenu from '../account-menu';
import { useAuthContext } from '@/lib/provider/auth-context-provider';
import { useTheme } from '@/lib/provider/theme-provider';
import Icon from '../ui/icons';


const AdminHeader = () => {
  const { authenticatedUser } = useAuthContext();
  const{theme,toggleTheme}=useTheme();

  return (
    <header className="sticky top-0 z-10 flex items-center border-b h-12 sm:h-13 md:h-14 bg-background">
      <div className="w-full px-3 sm:px-4 md:px-6 flex items-center justify-between">
        <SidebarTrigger className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            <Icon
              icon={theme === 'light' ? 'moon' : 'sun'}
              size="18"
              className="text-muted-foreground"
            />
          </button>
        <AccountMenu user={authenticatedUser?.user} />
        </div>
      </div>
    </header>
  );
};

export { AdminHeader };
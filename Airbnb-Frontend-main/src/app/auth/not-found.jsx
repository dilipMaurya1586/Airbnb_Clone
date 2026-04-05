import { LinkWithIcon } from '@/components/ui/link'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3 sm:gap-4 md:gap-5 px-3 sm:px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">404</h1>
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
        Page Not Found
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center max-w-md">
        Please search for a valid page
      </p>
      <LinkWithIcon 
        to="/" 
        icon="home"
        className="mt-2 sm:mt-3 md:mt-4 h-9 sm:h-10 md:h-11 text-xs sm:text-sm md:text-base"
      >
        Go to Home
      </LinkWithIcon>
    </div>
  )
}

export default NotFound
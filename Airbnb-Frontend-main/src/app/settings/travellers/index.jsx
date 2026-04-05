import { Separator } from '@/components/ui/separator'
import React from 'react'
import CoTravellerInfo from './travellers-card'
import AddNewTraveler from '@/app/checkout/guests/add-new-travler-dialog'
import  { useTravelerContext } from '@/lib/provider/traveler-context'
import { LoadingSpinner } from '@/components/ui/loader'
import ApiError from '@/components/api-error'


const TravlersManagement = () => {
    const {travelers,pending,error}=useTravelerContext()
    
    if(error)  return <ApiError
      errorMessage={error} 
      className="h-[calc(100vh-240px)]"
    />
    
    if(pending) return <LoadingSpinner ContainerClassName={"min-h-[calc(100vh-56px)]"}/>
    
    return(
      <section className="w-full px-3 sm:px-4 md:px-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Co-Travellers</h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Add, Remove or Update your travellers list
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <AddNewTraveler/>
          </div>
        </div>
        <Separator className="mt-4 sm:mt-5 md:mt-6 mb-4 sm:mb-5 md:mb-6" />
        
        {/* NEW: Conditional rendering */}
        {travelers && travelers.length > 0 ? (
          <div className="space-y-2 sm:space-y-3">
            {travelers.map((traveler) => (
              <CoTravellerInfo {...traveler} key={traveler.id} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 sm:py-16">
            <p className="text-lg sm:text-xl font-semibold text-muted-foreground">
              No Co-Travellers Added
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              Add your first co-traveller to get started!
            </p>
          </div>
        )}
      </section>
    )
}

export default TravlersManagement
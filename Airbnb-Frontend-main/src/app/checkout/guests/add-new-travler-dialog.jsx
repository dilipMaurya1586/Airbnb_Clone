import AddorUpdateTravelerDialog from '@/app/features/travelers/traveler-dialog'
import React, { useState } from 'react'
import useAddTraveler from '../hook/use-add-traveler';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icons';

const AddNewTraveler = () => {
  const[isAddGuestDialogOpen,setIsAddGuestDialogOpen]=useState(false);
 const { pending, data, addGuest } = useAddTraveler({ setIsAddGuestDialogOpen })

  return (
    <AddorUpdateTravelerDialog
     mutate={addGuest}
      title={'Add New Traveler'}
      isDialogOpen={isAddGuestDialogOpen}
      setIsDialogOpen={setIsAddGuestDialogOpen}
      isDisabled={pending}
      isLoading={pending}
      submitButtonText={'Add To Travelers List'}
      TriggerNode={
        <Button
          size={'sm'}
          variant={'link'}
          className="h-auto gap-1 p-0 text-sm font-semibold transition-opacity hover:opacity-80 hover:no-underline"
        >
          <Icon icon={'plus'} size={16} />
          Add New Travelers
        </Button>
      }
    />
  )
}

export default AddNewTraveler

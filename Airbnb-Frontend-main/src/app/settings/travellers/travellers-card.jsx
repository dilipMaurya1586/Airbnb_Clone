import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import dayjs from 'dayjs';
import React from 'react';
import { getDefaultProfile } from '@/lib/utils';
import RemoveTraveller from './remove-traveler';
import useUpdateGuestInfo from './use-update-guest';
import AddOrUpdateTravelerDialog from '@/app/features/travelers/traveler-dialog';
import { useTravelerContext } from '@/lib/provider/traveler-context';
import Icon from '@/components/ui/icons';

const CoTravellerInfo = ({ name, dateOfBirth, gender, id }) => {
  const { setTravelers } = useTravelerContext();
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = React.useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = React.useState(false);
  const { updateGuestInfo, pending } = useUpdateGuestInfo({
    guestId: id,
    setIsUpdateDialogOpen,
    onGuestInfoUpdate: (data) => {
      setTravelers((prevTravellers) => {
        return prevTravellers.map((traveller) => {
          if (traveller.id === id) {
            return {
              ...traveller,
              ...data,
            };
          }
          return traveller;
        });
      });
    },
  });
  const age = dayjs().diff(dateOfBirth, 'year');
  return (
    <div className="flex items-center justify-between gap-3 sm:gap-4 px-2 sm:px-3 py-3 sm:py-4 [&:not(:last-child)]:border-b">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
        <Avatar className="h-10 w-10 sm:h-11 sm:w-11 shrink-0">
          <AvatarImage
            loading="lazy"
            src={getDefaultProfile(name.charAt(0))}
            width={36}
            height={36}
          />
          <AvatarFallback>{name && name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm sm:text-base font-semibold truncate">{name}</h3>
          <p className="text-xs sm:text-sm font-medium capitalize text-muted-foreground truncate">
            {`${gender}, ${age}Y, ${dateOfBirth}`}
          </p>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="w-8 h-8 shrink-0 ml-auto"
            aria-label="Manage Co-traveller"
          >
            <Icon icon="more" size="16" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => {
              setIsUpdateDialogOpen(true);
            }}
          >
            Edit Traveller Info
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-destructive focus:text-destructive focus:bg-destructive/20"
            onClick={() => {
              setIsRemoveDialogOpen(true);
            }}
          >
            Remove Traveller
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AddOrUpdateTravelerDialog
        mutate={updateGuestInfo}
        title="Edit Traveller Information"
        description="Edit the details of the traveler"
        submitButtonText="Save Changes"
        isDialogOpen={isUpdateDialogOpen}
        setIsDialogOpen={setIsUpdateDialogOpen}
        formInitialData={{
          name,
          dateOfBirth: dateOfBirth ? dateOfBirth.split('-').join('') : null,
          gender,
        }}
        isDisabled={pending}
        isLoading={pending}
      />
      <RemoveTraveller
        id={id}
        isDialogOpen={isRemoveDialogOpen}
        setIsDialogOpen={setIsRemoveDialogOpen}
      />
    </div>
  );
};

export default CoTravellerInfo;
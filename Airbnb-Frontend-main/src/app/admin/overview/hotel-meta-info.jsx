import PATH_CONFIG from '@/app/config/path.config';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Icon from '@/components/ui/icons';
import useMutation from '@/lib/hooks/useMutation';
import React from 'react'
import { useNavigate, useParams } from 'react-router';
import { toast } from 'sonner';


const DeleteHotelConfirmationDialog = ({ openDialog, setOpenDialog }) => {
  const navigate = useNavigate();
  const { hotelId } = useParams();
  const { mutate, pending } = useMutation(`/admin/hotels/${hotelId}`, 'DELETE');
  const deleteHotelHandler = React.useCallback(() => {
    mutate(null, {
      onSuccess: () => {
        setOpenDialog(false);
        navigate(PATH_CONFIG.ADMIN.LIST_HOTELS);
      },
      onError: (error) => {
        toast(error.message || ERROR_FALLBACK.TITLE, {
          type: 'error',
        });
      },
    });
  }, []);

  return (
    <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
      <AlertDialogContent className="w-[90vw] sm:w-full">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-lg sm:text-xl">Confirm Hotel Deletion</AlertDialogTitle>
          <AlertDialogDescription className="leading-relaxed text-sm sm:text-base">
            Are you sure you want to delete this hotel? This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col-reverse sm:flex-row gap-2 sm:gap-0">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            variant="destructive"
            onClick={deleteHotelHandler}
            disabled={pending}
          >
            Yes, Delete My Hotel
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const HotelSettings = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const openDeleteConfirmationDialog = React.useCallback(() => {
    setOpenDialog(true);
    setDropdownOpen(false);
  }, [setDropdownOpen, setOpenDialog]);
  return (
    <React.Fragment>
      <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button size="icon" className="w-8 h-8 shrink-0" variant="ghost">
            <Icon icon="more" size="16" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => navigate(`/admin/hotels/${hotelId}/edit`)}
          >
            Edit Hotel Details
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={openDeleteConfirmationDialog}
            className="text-destructive focus:text-destructive"
          >
            Delete Hotel
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteHotelConfirmationDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </React.Fragment>
  );
};

const HotelMetaInfo = ({name,address,photo,active}) => {
  return (
    <article className="p-3 sm:p-4 border rounded-md">
      {/* Top section - Photo and 3 dots */}
      <div className="flex gap-2 sm:gap-4 mb-3 sm:mb-4">
        {/* Photo - Optimized sizes per device */}
        <img
          src={photo}
          alt={name}
          width={150}
          height={100}
          className="rounded-md w-16 h-12 sm:w-24 sm:h-16 md:w-32 md:h-24 lg:w-[150px] lg:h-[100px] object-cover shrink-0"
        />
        
        {/* 3 dots - always on right */}
        <div className="flex justify-end flex-1">
          <HotelSettings />
        </div>
      </div>
 
      {/* Bottom section - Hotel info */}
      <div className="space-y-2 sm:space-y-3">
        <div className="space-y-1 sm:space-y-2">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold leading-tight line-clamp-2">
            {name}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
            {address}
          </p>
        </div>
      </div>
    </article>
  )
}

export default HotelMetaInfo
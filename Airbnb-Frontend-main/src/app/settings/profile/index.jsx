import { Separator } from '@/components/ui/separator';
import React from 'react'
import EditProfile from './edit-profile';

const Profile = () => {
  return (
    <section className="w-full px-3 sm:px-4 md:px-0">
      {/* Header Section */}
      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
          Profile
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Basic Information for a faster booking experience
        </p>
      </div>

      {/* Separator */}
      <Separator className="mt-4 sm:mt-5 md:mt-6 mb-4 sm:mb-5 md:mb-6" />

      {/* Form Section */}
      <div className="w-full">
        <EditProfile />
      </div>
    </section>
  );
}

export default Profile
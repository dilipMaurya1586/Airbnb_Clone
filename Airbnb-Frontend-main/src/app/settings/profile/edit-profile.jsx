import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import InputDOB from '@/components/ui/input-dob';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import useProfileForm from './use-profile-form';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icons';

const EditProfile = () => {
  const { form, updateProfileHandler, pending } = useProfileForm();
  
  return (
    <Form {...form}>
      <form
        className="space-y-4 sm:space-y-5 md:space-y-6 w-full"
        onSubmit={form.handleSubmit(updateProfileHandler)}
      >
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base">Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="John Doe" 
                  className="h-9 sm:h-10 text-sm sm:text-base"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        {/* Email Field - Read Only */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base inline-flex items-center gap-2 flex-wrap">
                Email
                <div className="text-[9px] sm:text-[10px] text-primary bg-blue-100 px-2 py-1 rounded-full whitespace-nowrap">
                  Not Editable
                </div>
              </FormLabel>
              <FormControl>
                <Input 
                  readOnly 
                  className="h-9 sm:h-10 text-sm sm:text-base bg-muted cursor-not-allowed"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        {/* Date of Birth Field */}
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base">Date of birth</FormLabel>
              <FormControl>
                <InputDOB 
                  className="h-9 sm:h-10 text-sm sm:text-base"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        {/* Gender Field - Radio Group */}
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm sm:text-base block mb-3">Gender</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-3"
                >
                  {/* Male Option */}
                  <FormItem className="flex items-center px-3 sm:px-4 rounded-md border h-10 sm:h-11 space-x-2 [&:has([aria-checked=true])]:bg-blue-50 cursor-pointer [&:has([aria-checked=true])]:border-primary space-y-0 flex-1 sm:flex-none">
                    <FormControl>
                      <RadioGroupItem
                        value="MALE"
                        className="w-auto h-auto border-0 rounded-none"
                        CustomNode={() => <Icon icon="male" size="18" className="sm:size-[20px]" />}
                      />
                    </FormControl>
                    <FormLabel className="font-normal text-sm sm:text-base cursor-pointer">
                      Male
                    </FormLabel>
                  </FormItem>

                  {/* Female Option */}
                  <FormItem className="flex items-center px-3 sm:px-4 rounded-md border h-10 sm:h-11 space-x-2 [&:has([aria-checked=true])]:bg-pink-50 cursor-pointer [&:has([aria-checked=true])]:border-pink-500 space-y-0 flex-1 sm:flex-none">
                    <FormControl>
                      <RadioGroupItem
                        value="FEMALE"
                        className="w-auto h-auto text-pink-400 border-0 rounded-none"
                        CustomNode={() => <Icon icon="female" size="18" className="sm:size-[20px]" />}
                      />
                    </FormControl>
                    <FormLabel className="font-normal text-sm sm:text-base cursor-pointer">
                      Female
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="pt-2 sm:pt-4">
          <Button
            disabled={pending}
            size="lg"
            type="submit"
            className="w-full sm:w-auto h-10 sm:h-11 text-sm sm:text-base gap-2"
          >
            <Icon icon="save" size="18" />
            {pending ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditProfile;
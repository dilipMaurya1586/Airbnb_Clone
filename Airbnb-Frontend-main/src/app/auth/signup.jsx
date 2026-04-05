import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { useSignUpForm } from './hooks/use-signup-form';
import { ServerNotice } from '@/components/server-notice';

const SignUp = () => {
  const { form, handleSignUpSubmit, pending } = useSignUpForm();

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignUpSubmit)}
          className="w-full mt-4 sm:mt-6 md:mt-8 space-y-3 sm:space-y-4 md:space-y-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs sm:text-sm md:text-base">Full Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="h-8 sm:h-9 md:h-10 rounded text-xs sm:text-sm"
                    placeholder="Enter your full name"
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs sm:text-sm md:text-base">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    className="h-8 sm:h-9 md:h-10 rounded text-xs sm:text-sm"
                    placeholder="Enter your email"
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs sm:text-sm md:text-base">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    className="h-8 sm:h-9 md:h-10 rounded text-xs sm:text-sm"
                    placeholder="Create a strong password"
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-8 sm:h-9 md:h-10 text-xs sm:text-sm md:text-base"
            disabled={pending}
            aria-label="Create a new Account"
          >
            {pending ? 'Creating Account…' : 'Create New Account'}
          </Button>
        </form>
      </Form>

      <ServerNotice />

      <div className="flex items-center justify-center mt-4 sm:mt-5 md:mt-6">
        <span className="text-xs sm:text-sm text-center">
          Already have an account?{' '}
          <Link to="/signin" className="text-primary hover:underline font-medium">
            Sign in
          </Link>
        </span>
      </div>
    </>
  );
};

export default SignUp;
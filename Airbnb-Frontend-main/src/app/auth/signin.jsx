import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Icon from '@/components/ui/icons';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { useSignInForm } from './hooks/use-signin-form';
import { ServerNotice } from '@/components/server-notice';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { form, handleSignInSubmit, pending } = useSignInForm();

  const handleHidePassword = (e) => {
    e.preventDefault();
    setShowPassword(prev => !prev);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignInSubmit)}
          className="w-full mt-4 sm:mt-6 md:mt-8 space-y-3 sm:space-y-4 md:space-y-5"
        >
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
                  <div className="flex items-center gap-1 border rounded overflow-hidden">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      {...field}
                      className="h-8 sm:h-9 md:h-10 rounded-none border-0 text-xs sm:text-sm flex-1 focus-visible:ring-0"
                      placeholder="Enter your password"
                    />
                    <Button
                      type="button"
                      onClick={handleHidePassword}
                      disabled={pending}
                      variant="ghost"
                      size="sm"
                      className="h-8 sm:h-9 md:h-10 px-2 rounded-none"
                    >
                      <Icon icon="eye" size="16" className="sm:size-[18px] md:size-[20px]" />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-8 sm:h-9 md:h-10 text-xs sm:text-sm md:text-base"
            disabled={pending}
            aria-label="Login to your Account"
          >
            {pending ? 'Logging in…' : 'Log in'}
          </Button>
        </form>
      </Form>

      <ServerNotice />

      <div className="flex items-center justify-center mt-4 sm:mt-5 md:mt-6">
        <span className="text-xs sm:text-sm text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary hover:underline font-medium">
            Create Account
          </Link>
        </span>
      </div>
    </>
  );
};

export default SignIn;
'use client';

import { lusitana } from '@/app/styles/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/components/button';
import { useFormState, useFormStatus } from 'react-dom';
import { signUp } from '@/app/lib/actions';

export default function SignupForm() {
  const [state, dispatch] = useFormState(signUp, undefined);

  return (
    <form action={dispatch} className="w-full space-y-3">
      <div className="flex-1 rounded-lg bg-dark px-6 pb-4 pt-8 text-light">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Sign Up here
        </h1>



        <div className="w-full">

          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-light"
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative">
              <input
                className="text-dark"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name here"
                required
              />
               </div>
          </div>



          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-light"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="text-dark"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              </div>
          </div>



          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-light"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="text-dark"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
               </div>
          </div>








          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-light"
              htmlFor="thumbnail"
            >
            thumbnail
            </label>
            <div className="relative">
              <input
                className="text-dark"
                id="thumbnail"
                type="file"
                name="thumbnail"
                placeholder="thumbnail"
                required
              />
               </div>
          </div>

          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-light"
              htmlFor="image"
            >
              image
            </label>
            <div className="relative">
              <input
                className="text-dark"
                id="image"
                type="file"
                name="image"
                placeholder="image"
                required
              />
               </div>
          </div>

          
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-light"
              htmlFor="bio"
            >
              bio
            </label>
            <div className="relative">
              <input
                className="text-dark"
                id="bio"
                type="text"
                name="bio"
                placeholder="bio"
                required
              />
               </div>
          </div>









          
        </div>
        <SignupButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        ></div>
        {state?.message && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{state.message}</p>
          </>
        )}
      </div>
    </form>
  );
}

function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Sign up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

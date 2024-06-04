'use client';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/components/button';
import { useFormState, useFormStatus } from 'react-dom';
import { signUp } from '@/app/lib/actions';



export default function SignupForm() {
  const [state, dispatch] = useFormState(signUp, undefined);

  return (
    <>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Sign Up Here</h2>

        <form action={dispatch} >
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="name"
              >
                Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name here"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>



            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="thumbnail"
              >
                thumbnail
              </label>
              <div className="relative">
                <input
                  id="thumbnail"
                  type="file"
                  name="thumbnail"
                  placeholder="thumbnail"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>


            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>












            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="image"
              >
                image
              </label>
              <div className="relative">
                <input
                  id="image"
                  type="file"
                  name="image"
                  placeholder="image"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>




            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>


            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="bio"
              >
                bio
              </label>
              <div className="relative">
                <input
                  id="bio"
                  type="text"
                  name="bio"
                  placeholder="bio"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
          </div>


          <div className="flex justify-end mt-6">
            <SignupButton />

            {state?.message && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{state.message}</p>
              </>
            )}
          </div>

        </form>
      </section>
    </>
  );
}

function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-end mt-6">
      <Button
        className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        aria-disabled={pending}>
        Sign up 
      </Button>
    </div >
  );
}

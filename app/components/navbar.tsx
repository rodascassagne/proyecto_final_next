'use client';
import React, { useState } from 'react';
import { UserCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import HandcraftedHavenLogo from './handcraftedhavenlogo';
import LoginButton from './login-button';
import LogoutButton from './logout-button';
import SignupButton from './signup/signup-button';

export default function Navbar({ loggedInUser }: { loggedInUser: {} | null }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-sky-50">
      <div className=" flex  justify-between p-4">

        <Link
          className="mb-2 flex h-20 items-end justify-center rounded-md bg-amber-700 p-4 md:h-20"
          href="/"
        >
          <div className="w-90 text-white md:w-90">
            <HandcraftedHavenLogo />
          </div>
        </Link>

        <div className="hidden flex-col md:flex md:flex-row md:items-center md:space-x-8">
          {loggedInUser && (
            <Link href="/profile" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              profile
            </Link>
          )}

          <Link href="/" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            Home
          </Link>
          <Link href="/products" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            Products
          </Link>
          <Link href="/sellers" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            Sellers
          </Link>
          <Link href="/sellersproducts" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            sellersproducts
          </Link>
          {loggedInUser ? (
            <LogoutButton />
          ) : (
            <>
              <LoginButton />
              <SignupButton />
            </>
          )}
        </div>
      </div>    
    </nav>

  );
}

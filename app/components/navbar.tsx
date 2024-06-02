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
    <nav className="bg-amber-50">
      <div className="relative mx-auto flex max-w-screen-xl items-center justify-between p-4">

        <Link
          className="mb-2 flex h-20 items-end justify-center rounded-md bg-amber-700 p-4 md:h-20"
          href="/"
        >
          <div className="w-90 text-white md:w-90">
            <HandcraftedHavenLogo />
          </div>
        </Link>









        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* Hamburger Icon */}
          {isOpen ? (
            <XMarkIcon className="w-10 text-red-600" />
          ) : (
            <div>
              <svg
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </div>
          )}
        </button>
        <div className="hidden flex-col md:flex md:flex-row md:items-center md:space-x-8">
          {loggedInUser && (
            <Link href="/profile">
              profile
            </Link>
          )}

          <Link href="/" className="text-dark hover:text-gray-700">
            Home
          </Link>
          <Link href="/products" className="text-dark hover:text-gray-700">
            Products
          </Link>
          <Link href="/sellers" className="text-dark hover:text-gray-700">
            Sellers
          </Link>
          <Link href="/sellersproducts" className="text-dark hover:text-gray-700">
            sellersproducts
          </Link>
          {loggedInUser ? (
            <LogoutButton />
          ) : (
            <>
              <LoginButton /> <>hola</> <SignupButton />
            </>
          )}
        </div>
      </div>
      <div
        className={`${isOpen ? 'block' : 'hidden'
          } absolute top-full m-0 flex w-full flex-col gap-2 bg-light p-4 md:hidden`}
      >
        {loggedInUser && (
          <Link href="/profile" className="flex justify-center">
            <UserCircleIcon className="w-10 self-center text-brown transition hover:scale-105 hover:text-brown" />
          </Link>
        )}

        <Link
          href="/"
          className="text-center text-dark hover:text-gray-700 md:text-left"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="text-center text-dark hover:text-gray-700 md:text-left"
        >
          Products
        </Link>
        <Link
          href="/sellers"
          className="text-center text-dark hover:text-gray-700 md:text-left"
        >
          Sellers
        </Link>
        {loggedInUser ? (
          <div className="flex">
            <LogoutButton />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <LoginButton />
            <SignupButton />
          </div>
        )}
      </div>
    </nav>

  );
}

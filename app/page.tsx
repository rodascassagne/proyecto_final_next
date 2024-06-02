import styles from '@/app/styles/home.module.css';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Handcrafted Haven',
};

export default function Page() {
  return (
    <>
      <div className=" flex items-center justify-center bg-blue-200 py-10 ">
        <strong className="text-3xl md:text-4xl">Welcome to Handcrafted Haven.</strong>
      </div>
    </>
  );
}

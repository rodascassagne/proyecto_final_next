import React from 'react';
import { useSearchParams } from 'next/navigation';
import ProductList from '@/app/components/products/product-list';
import { Metadata } from 'next'; // Make sure this import path is correct, usually it's from 'next/head'
import Link from 'next/link';
import ProductFilterButtons from '../components/products/product-filter-buttons';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Products',
};



export default function Page() {
 

  return( 
  <>
  <ProductFilterButtons maxPrice={'5000'} />
  <ProductList maxPrice={'500000'} />
  </>
  
  );
}

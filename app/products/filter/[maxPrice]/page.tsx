import React from 'react';
import ProductList from '@/app/components/products/product-list';
import { Metadata } from 'next';
import Link from 'next/link';
import ProductFilterButtons from '@/app/components/products/product-filter-buttons';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Products',
};



export default function Page({ params }: { params: { maxPrice: string } }) {

  return( 
    <>
    <h1 className='text-3xl mb-5 text-center text-light underline'>Product Catalog</h1>
    <ProductFilterButtons maxPrice={params.maxPrice} />
    <ProductList maxPrice={params.maxPrice} />
    </>
  );
}

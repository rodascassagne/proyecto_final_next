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
    <ProductFilterButtons maxPrice={params.maxPrice} />
    <ProductList maxPrice={params.maxPrice} />
    </>
  );
}

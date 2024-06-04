
import { Metadata } from 'next';

import Sellersproducts from '../components/seller/sellersproducts';

export const metadata: Metadata = {
  title: 'Handcrafted Haven',
};

export default function Page() {
  return (
    <div
    className="
    grid 
    grid-cols-1 
    gap-10 
    p-10 
    sm:grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 ">

      <Sellersproducts />
    </div>
  )
    ;
}
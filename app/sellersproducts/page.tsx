
import { Metadata } from 'next';

import './SellerPage.css';
import Sellersproducts from '../components/seller/sellersproducts';

export const metadata: Metadata = {
  title: 'Handcrafted Haven',
};

export default function Page() {
  return <Sellersproducts/>;
}